import "./styles.css";
import React, { useState, useEffect } from "react";
import { PlayerPosMap, slotcodes, DataPoints } from "./constants";
import SangTable from "./SangTable";
import {isFetchable, getLastElementMap} from './util';

function TotalContainer() {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [playerList, setPlayerList] = useState([]);
  const [playerMap, setPlayerMap] = useState(new Map())
  const [selectedMode, setSelectedMode] = useState(0);
  const [selectedWeek, setSelectedWeek] = useState(11);

  // console.log(isFetchable('https://raw.githubusercontent.com/seoular/test/main/bovada5'))

  const scrapeEspnStats = async (week) => {
    //https://fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/995547?view=mMatchup&view=mMatchupScore
    const getUrl =
      "https://raw.githubusercontent.com/seoular/OddsVis/main/ESPNAPIFiles/latestHppr"
    // we may need to return to this but currently just use the latest one as it has past history as well
    //  "https://raw.githubusercontent.com/seoular/OddsVis/main/ESPNAPIFiles/week" + week + "hppr";

    await fetch(getUrl)
      .then((response) => {
        return response.json();
      })
      .then((r) => {
        let data = [];
        const d = r;
        for (const tm of d.teams) {
          const tmid = tm.id;
          for (const p of tm.roster.entries) {
            const name = p.playerPoolEntry.player.fullName;
            const slot = p.lineupSlotId;
            const pos = slotcodes[slot];

            // Injured status (need try/catch because of D/ST)
            let inj = "NA";
            try {
              inj = p.playerPoolEntry.player.injuryStatus;
            } catch (error) {
              // Do nothing, leave 'NA' as the default value for injured status
            }

            // Projected/actual points
            let proj = null,
              act = null;

            for (const stat of p.playerPoolEntry.player.stats) {
              if (stat.scoringPeriodId !== week) {
                continue;
              }
              if (stat.statSourceId === 0) {
                act = stat.appliedTotal;
              } else if (stat.statSourceId === 1) {
                proj = stat.appliedTotal;
              }
            }

            data.push([week, tmid, name, slot, pos, inj, proj, act]);
            playerMap.set(name, {
              proj: proj?.toFixed(2),
              act: act?.toFixed(2)
            });
          }
        }

      }).catch((e) => {
        playerMap.clear()
      });
    setPlayerMap(playerMap)
  };

  const scrapeData = async (pos, mode, week) => {
    const sangPProps = new Map();
    const dpCountMap = new Map();
    const playerToDPListMap = new Map();

    let receptionMultiplier = .5;


    if(mode == 0)
      receptionMultiplier = .5;
    else if(mode == 1)
      receptionMultiplier = 0;
    else if (mode == 2)
      receptionMultiplier = 1;

      //https://www.bovada.lv/services/sports/event/v2/events/A/description/football/nfl

    let testedInts = 0;
    let lastTestedInt = 0;
    let isNewBovadaFileCheck = false;

    let bovadaFileLoopFlag = true;

    let playerToAnyTDDataPoints = new Map();
    let playerToRushYdsDataPoints = new Map();
    let playerToRecYdsDataPoints = new Map();
    let playerToRecsDataPoints = new Map();
    let playerToPassTDDataPoints = new Map();
    let playerToPassYdsDataPoints = new Map();
    let playerToIntsDataPoints = new Map();

    while(bovadaFileLoopFlag){
      if(testedInts > lastTestedInt){
        isNewBovadaFileCheck = true;        
        lastTestedInt++;
      }
      await fetch('https://raw.githubusercontent.com/seoular/OddsVis/main/BovadaAPIFiles/week' + week + '' + testedInts)
        .then((response) => {
          return response.json();
        })
        .then((data) => {

          let allNflGames = data[0].events.slice();
          
          for (let i = 0; i < allNflGames.length; i++) {
            let eachGameTDOutcomes = allNflGames[i].displayGroups
              .find((x) => x.id == "100-1870")
              ?.markets.find(
                (y) =>
                  y.descriptionKey == "Anytime Touchdown Scorer" &&
                  y.period.id == "119"
              )?.outcomes;
            let eachGameRushingOutcomes = allNflGames[i].displayGroups
              .find((x) => x.id == "100-93")
              ?.markets.filter((y) => y.marketTypeId == "121337");
            let eachGameReceivingOutcomes = allNflGames[i].displayGroups
              .find((x) => x.id == "100-94")
              ?.markets.filter((y) => y.marketTypeId == "121333");
            let eachGameReceptionOutcomes = allNflGames[i].displayGroups
              .find((x) => x.id == "100-94")
              ?.markets.filter((y) => y.marketTypeId == "121332");
            let eachGamePassingYdOutcomes = allNflGames[i].displayGroups
              .find((x) => x.id == "100-1188")
              ?.markets.filter((y) => y.marketTypeId == "121348");
            let eachGamePassingTDOutcomes = allNflGames[i].displayGroups
              .find((x) => x.id == "100-1188")
              ?.markets.filter((y) => y.marketTypeId == "121335");
            let eachGameIntOutcomes = allNflGames[i].displayGroups
              .find((x) => x.id == "100-1188")
              ?.markets.filter((y) => y.marketTypeId == "121329");
            if (typeof eachGameTDOutcomes !== "undefined") {
              let amonRaFlag = false;
              for (let j = 0; j < eachGameTDOutcomes.length; j++) {
                let playerOdds = eachGameTDOutcomes[j];

                if(playerOdds.description == 'Amon-Ra St.Brown'  || playerOdds.description == 'Amon-Ra St. Brown'){
                  playerOdds.description = 'Amon-Ra St. Brown'
                }
                playerOdds.description = playerOdds.description.replace(/\./g, '').replace(/ jr/i, '')
                if (playerOdds.description == 'AJ Brown '){
                  playerOdds.description = playerOdds.description.slice(0, -1)
                }                
                
                
                if( !amonRaFlag ) { 
                  let newAnyTDList = []
                  if (playerToAnyTDDataPoints.has(playerOdds.description)) {
                    newAnyTDList = playerToAnyTDDataPoints.get(playerOdds.description).slice()
                   
                  }
                  newAnyTDList.push((1 / playerOdds.price.decimal) * 6)
                  playerToAnyTDDataPoints.set(playerOdds.description, newAnyTDList)
                }

                if (name == 'Amon-Ra St. Brown'){
                  amonRaFlag = true;
                }
                
              }
            }
            if (typeof eachGameRushingOutcomes !== "undefined") {
              let amonRaFlag = false;
              for (let j = 0; j < eachGameRushingOutcomes.length; j++) {
                let playerOdds = eachGameRushingOutcomes[j];
                let name = playerOdds.description.slice(22);
                if(name == 'Amon-Ra St.Brown'  || name == 'Amon-Ra St. Brown'){
                  name = 'Amon-Ra St. Brown'
                }
                name = name.replace(/\./g, '').replace(/ jr/i, '')
                if (name == 'AJ Brown '){
                  name = name.slice(0, -1)
                }

                
                if( !amonRaFlag ) {
        
                  let newRushYdsList = []
                  if (playerToRushYdsDataPoints.has(name)) {
                    newRushYdsList = playerToRushYdsDataPoints.get(name)
                  }
                  newRushYdsList.push(playerOdds.outcomes[0].price.handicap / 10)
                  playerToRushYdsDataPoints.set(name, newRushYdsList)

                  
                }
                if (name == 'Amon-Ra St. Brown'){
                  amonRaFlag = true;
                }
              }
            }
            if (typeof eachGameReceivingOutcomes !== "undefined") {
              let amonRaFlag = false;
              for (let j = 0; j < eachGameReceivingOutcomes.length; j++) {
                let playerOdds = eachGameReceivingOutcomes[j];
                let name = playerOdds.description.slice(24);
                if(name == 'Amon-Ra St.Brown'  || name == 'Amon-Ra St. Brown'){
                  name = 'Amon-Ra St. Brown'
                  // console.log(playerOdds.outcomes[0].price.handicap / 10)
                }
                name = name.replace(/\./g, '').replace(/ jr/i, '')
                if (name == 'AJ Brown '){
                  name = name.slice(0, -1)
                }

                if( !amonRaFlag ) {


                  let newRecYdsList = []
                  if (playerToRecYdsDataPoints.has(name)) {
                    newRecYdsList = playerToRecYdsDataPoints.get(name)
                  }
                  newRecYdsList.push(playerOdds.outcomes[0].price.handicap / 10)
                  playerToRecYdsDataPoints.set(name, newRecYdsList)

                }
                if (name == 'Amon-Ra St. Brown'){
                  amonRaFlag = true;
                }
              }
            }
            if (typeof eachGameReceptionOutcomes !== "undefined") {
              let amonRaFlag = false;

              for (let j = 0; j < eachGameReceptionOutcomes.length; j++) {
                let playerOdds = eachGameReceptionOutcomes[j];
                let name = playerOdds.description.slice(19);
                if(name == 'Amon-Ra St.Brown'  || name == 'Amon-Ra St. Brown'){
                  name = 'Amon-Ra St. Brown'
                } 
                name = name.replace(/\./g, '').replace(/ jr/i, '')
                if (name == 'AJ Brown '){
                  name = name.slice(0, -1)
                }

                if( !amonRaFlag ) {

 
                  let newRecsList = []
                  if (playerToRecsDataPoints.has(name)) {
                    newRecsList = playerToRecsDataPoints.get(name)
                  }
                  newRecsList.push(playerOdds.outcomes[0].price.handicap * receptionMultiplier)
                  playerToRecsDataPoints.set(name, newRecsList)

                }

                if (name == 'Amon-Ra St. Brown'){                
                  amonRaFlag = true;
                }
              }
            }
            if (typeof eachGamePassingYdOutcomes !== "undefined") {
              for (let j = 0; j < eachGamePassingYdOutcomes.length; j++) {
                let playerOdds = eachGamePassingYdOutcomes[j];
                let name = playerOdds.description.slice(22);
                name = name.replace(/\./g, '').replace(/ jr/i, '')
                if (name == 'AJ Brown '){
                  name = name.slice(0, -1)
                }



                let newPassYdsList = []
                if (playerToPassYdsDataPoints.has(name)) {
                  newPassYdsList = playerToPassYdsDataPoints.get(name)
                }
                newPassYdsList.push(playerOdds.outcomes[0].price.handicap /25)
                playerToPassYdsDataPoints.set(name, newPassYdsList)

              }
            }
            if (typeof eachGamePassingTDOutcomes !== "undefined") {
              for (let j = 0; j < eachGamePassingTDOutcomes.length; j++) {
                let playerOdds = eachGamePassingTDOutcomes[j];
                let name = playerOdds.description.slice(27);
                name = name.replace(/\./g, '').replace(/ jr/i, '')
                if (name == 'AJ Brown '){
                  name = name.slice(0, -1)
                }

                let newPassTdsList = []
                if (playerToPassTDDataPoints.has(name)) {
                  newPassTdsList = playerToPassTDDataPoints.get(name)
                }
                newPassTdsList.push(playerOdds.outcomes[0].price.handicap *4)
                playerToPassTDDataPoints.set(name, newPassTdsList)

              }
            }
            if (typeof eachGameIntOutcomes !== "undefined") {
              for (let j = 0; j < eachGameIntOutcomes.length; j++) {
                let playerOdds = eachGameIntOutcomes[j];
                let name = playerOdds.description.slice(29);
                name = name.replace(/\./g, '').replace(/ jr/i, '')
                if (name == 'AJ Brown '){
                  name = name.slice(0, -1)
                }
               
                let newIntsList = []

                if (playerToIntsDataPoints.has(name)) {
                  newIntsList = playerToIntsDataPoints.get(name)
                }
                newIntsList.push(playerOdds.outcomes[0].price.handicap *-2)
                playerToIntsDataPoints.set(name, newIntsList)

              }
            }
          }
        }).catch((e) => {
          // console.log('Index of page not factored in: ' + testedInts)
        });


      testedInts++;
      isNewBovadaFileCheck = false;
      // console.log('https://raw.githubusercontent.com/seoular/OddsVis/main/BovadaAPIFiles/week' + week + '' + testedInts)
      bovadaFileLoopFlag = await isFetchable('https://raw.githubusercontent.com/seoular/OddsVis/main/BovadaAPIFiles/week' + week + '' + testedInts)
    }
    
    let playerToAnyTD = getLastElementMap(playerToAnyTDDataPoints);
    let playerToRushYds = getLastElementMap(playerToRushYdsDataPoints);
    let playerToRecYds = getLastElementMap(playerToRecYdsDataPoints);
    let playerToRecs = getLastElementMap(playerToRecsDataPoints);
    let playerToPassTD = getLastElementMap(playerToPassTDDataPoints);
    let playerToPassYds = getLastElementMap(playerToPassYdsDataPoints);
    let playerToInts = getLastElementMap(playerToIntsDataPoints);

    let finalPlayerToEV = new Map()
    let finalPlayerToDPCount = new Map()
    function sumPlayerEVs(){
      Array.from(arguments).forEach((arg) => {
        arg.forEach((value, key) => {
          let temp = value;
          if(finalPlayerToEV.has(key)){
            temp = finalPlayerToEV.get(key)
            temp += value
          }
          finalPlayerToEV.set(key, temp)
        })
      })      
    }
    function sumPlayerDP(){
      Array.from(arguments).forEach((arg) => {
        arg.forEach((value, key) => {
          let temp = 1;
          if(finalPlayerToDPCount.has(key)){
            temp = finalPlayerToDPCount.get(key)
            temp++
          }
          finalPlayerToDPCount.set(key, temp)
        })
      })  
    }
    sumPlayerEVs(playerToAnyTD, playerToRushYds, playerToRecYds, playerToRecs, playerToPassTD, playerToPassYds, playerToInts)
    sumPlayerDP(playerToAnyTD, playerToRushYds, playerToRecYds, playerToRecs, playerToPassTD, playerToPassYds, playerToInts)
    
    const mapEntries = Array.from(finalPlayerToEV.entries());  
    // Sort the array based on the numeric value (assuming values are numbers)
    mapEntries.sort((a, b) => b[1] - a[1]);
    // Create a new Map from the sorted array
    const sortedMap = new Map(mapEntries);
    let finalList = Array.from(sortedMap.entries()).filter(
      (x) =>
        typeof PlayerPosMap.get(x[0]) !== "undefined" &&
        (PlayerPosMap.get(x[0]) == pos || pos == 99 || (pos == 98 && PlayerPosMap.get(x[0]) !== 0))  &&
        x[1] > 5
    );
    if(pos == 0){
      finalList = finalList.filter((d) => {
        return finalPlayerToDPCount.get(d[0]) >= 4
      })
    } else {
      finalList = finalList.filter((d) => {
        return finalPlayerToDPCount.get(d[0]) >= 3
      })
    } 
    setPlayerList(finalList);
  };

  useEffect(() => {
    scrapeEspnStats(selectedWeek)
  }, [selectedWeek])
  useEffect(() => {
    scrapeData(selectedPosition, selectedMode, selectedWeek).catch(console.error);
  }, [selectedPosition, selectedMode, selectedWeek]); 
  

  const redirectToPatreon = () => {
    window.location.href = 'https://www.patreon.com/evProjecter';
  }

  return (
    <div>
      <div>    
        <div style={{display:'flex', marginLeft: '20px', marginBottom:'5px', marginTop:'15px'}}>           
           Fantasy Football Projections Powered by Vegas Player Props
        </div>   
        <div style={{display:'flex'}}>
          <select
            defaultValue={selectedPosition}
            onChange={(e) => {
              setSelectedPosition(parseInt(e.target.value));
            }}
            style={{ display: "flex", marginLeft: "20px" }}
          >
            <option value="0">QB</option>
            <option value="1">RB</option>
            <option value="2">WR</option>
            <option value="3">TE</option>
            <option value="98">FLEX</option>
            <option value="99">SUPERFLEX</option>
          </select>
          <select
            defaultValue={selectedMode}
            onChange={(e) => {
              setSelectedMode(parseInt(e.target.value));
            }}
            style={{ display: "flex", marginLeft: "20px" }}
          >
            <option value="0">Half PPR</option>
            <option value="1">Standard</option>
            <option value="2">Full PPR</option>
          </select>
          <select
            defaultValue={selectedWeek}
            onChange={(e) => {
              setSelectedWeek(parseInt(e.target.value));
            }}
            style={{ display: "flex", marginLeft: "20px" }}
          >
            <option value="11">Week 11</option>
            <option value="10">Week 10</option>
          </select>
        </div>
        <SangTable  evList={playerList} espnPlayerMap={playerMap} />
    
      
      </div>
      <div class="updateTimeSection" >
        EV values last updated Monday, 11/18 at 4:05pm ET
      </div>
      <div class="patreonSection">
        <div>
          Access the Pro version with extra statistical insight and future functionality by supporting my Patreon link below
        </div>
        <button class="button" onClick={(e) => {redirectToPatreon()}}><span>evProjecterPro</span></button>
      </div>
    </div>
  );
}

export default TotalContainer;
