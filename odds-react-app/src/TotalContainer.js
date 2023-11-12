import "./styles.css";
import React, { useState, useEffect } from "react";
import { PlayerPosMap } from "./constants";
import SangTable from "./SangTable";

function TotalContainer() {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [playerList, setPlayerList] = useState([]);

  const memoizedFetch = (() => {
    const cache = {};

    return async function memoized(url, options) {
      const cacheKey = JSON.stringify({ url, options });

      if (cache[cacheKey]) {
        console.log("Using cached response for", url);
        return cache[cacheKey];
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        cache[cacheKey] = data;
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
  })();

  // Example usage:
  // Fetch data from the API and memoize the response
  // const fetchData = async () => {
  //   try {
  //     const data = ;
  //     console.log('Fetched data:', data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const scrapeData = async (pos) => {
    const sangPProps = new Map();
    var getUrl =
      "https://raw.githubusercontent.com/seoular/test/main/footballodds";
    await memoizedFetch(getUrl)
      .then((response) => {
        return response;
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
            for (let j = 0; j < eachGameTDOutcomes.length; j++) {
              let playerOdds = eachGameTDOutcomes[j];
              // get formula right later
              sangPProps.set(
                playerOdds.description,
                (1 / playerOdds.price.decimal) * 6
              );
            }
          }
          if (typeof eachGameRushingOutcomes !== "undefined") {
            for (let j = 0; j < eachGameRushingOutcomes.length; j++) {
              let playerOdds = eachGameRushingOutcomes[j];
              let name = playerOdds.description.slice(22);
              let temp = sangPProps.get(name);
              if (typeof temp == "undefined") {
                temp = 0;
              }
              sangPProps.set(
                name,
                temp + playerOdds.outcomes[0].price.handicap / 10
              );
            }
          }
          if (typeof eachGameReceivingOutcomes !== "undefined") {
            for (let j = 0; j < eachGameReceivingOutcomes.length; j++) {
              let playerOdds = eachGameReceivingOutcomes[j];
              let name = playerOdds.description.slice(24);
              let temp = sangPProps.get(name);
              if (typeof temp == "undefined") {
                temp = 0;
              }
              sangPProps.set(
                name,
                temp + playerOdds.outcomes[0].price.handicap / 10
              );
            }
          }
          if (typeof eachGameReceptionOutcomes !== "undefined") {
            for (let j = 0; j < eachGameReceptionOutcomes.length; j++) {
              let playerOdds = eachGameReceptionOutcomes[j];
              let name = playerOdds.description.slice(19);
              let temp = sangPProps.get(name);
              if (typeof temp == "undefined") {
                temp = 0;
              }
              sangPProps.set(
                name,
                temp + playerOdds.outcomes[0].price.handicap * 0.5
              );
            }
          }
          if (typeof eachGamePassingYdOutcomes !== "undefined") {
            for (let j = 0; j < eachGamePassingYdOutcomes.length; j++) {
              let playerOdds = eachGamePassingYdOutcomes[j];
              let name = playerOdds.description.slice(22);
              let temp = sangPProps.get(name);
              if (typeof temp == "undefined") {
                temp = 0;
              }
              sangPProps.set(
                name,
                temp + playerOdds.outcomes[0].price.handicap / 25
              );
            }
          }
          if (typeof eachGamePassingTDOutcomes !== "undefined") {
            for (let j = 0; j < eachGamePassingTDOutcomes.length; j++) {
              let playerOdds = eachGamePassingTDOutcomes[j];
              let name = playerOdds.description.slice(27);
              let temp = sangPProps.get(name);
              if (typeof temp == "undefined") {
                temp = 0;
              }
              sangPProps.set(
                name,
                temp + playerOdds.outcomes[0].price.handicap * 4
              );
            }
          }
          if (typeof eachGameIntOutcomes !== "undefined") {
            for (let j = 0; j < eachGameIntOutcomes.length; j++) {
              let playerOdds = eachGameIntOutcomes[j];
              let name = playerOdds.description.slice(29);
              let temp = sangPProps.get(name);
              if (typeof temp == "undefined") {
                temp = 0;
              }
              sangPProps.set(
                name,
                temp + playerOdds.outcomes[0].price.handicap * -2
              );
            }
          }
        }

        const mapEntries = Array.from(sangPProps.entries());
        // Sort the array based on the numeric value (assuming values are numbers)
        mapEntries.sort((a, b) => b[1] - a[1]);
        // Create a new Map from the sorted array
        const sortedMap = new Map(mapEntries);
        let finalList = Array.from(sortedMap.entries()).filter(
          (x) =>
            typeof PlayerPosMap.get(x[0]) !== "undefined" &&
            PlayerPosMap.get(x[0]) == pos &&
            x[1] > 5
        );

        setPlayerList(finalList);

        return finalList;
      });
    // .catch((err) => {
    //   return [];
    //   // Do something for an error here
    // });
  };

  useEffect(() => {
    scrapeData(selectedPosition).catch(console.error);
  }, [selectedPosition]);

  return (
    <div>
      <div>
        <div>
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
          </select>
        </div>
        <SangTable selectedPosition={selectedPosition} evList={playerList} />
      </div>
    </div>
  );
}

export default TotalContainer;
