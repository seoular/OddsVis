import "./styles.css";
import React, { useState, useEffect } from "react";

function calculateMeanAndStdDev(data) {
  // Extract the values in the 1st index of each list
  const values = data.map((item) => item[1]);

  // Calculate mean
  const meanValue = values.reduce((acc, val) => acc + val, 0) / values.length;

  // Calculate standard deviation
  const squaredDifferences = values.map((val) => Math.pow(val - meanValue, 2));
  const variance =
    squaredDifferences.reduce((acc, val) => acc + val, 0) / values.length;
  const stddevValue = Math.sqrt(variance);

  return { meanValue, stddevValue };
}

function calculatePercentile(mean, stddev, value) {
  // Calculate z-score
  const zScore = (value - mean) / stddev;

  // Use the error function (erf) to calculate the cumulative distribution function (CDF)
  const erf = (z) => {
    const t = 1.0 / (1.0 + 0.5 * Math.abs(z));
    const erf =
      t *
      Math.exp(
        -z * z -
          1.26551223 +
          t *
            (1.00002368 +
              t *
                (0.37409196 +
                  t *
                    (0.09678418 +
                      t *
                        (-0.18628806 +
                          t *
                            (0.27886807 +
                              t *
                                (-1.13520398 +
                                  t *
                                    (1.48851587 +
                                      t * (-0.82215223 + t * 0.17087277))))))))
      );
    return z >= 0 ? 1 - erf : erf - 1;
  };

  // Calculate percentile
  const percentile = (1 + erf(zScore / Math.sqrt(2))) / 2;

  return percentile;
}

function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    (s = h.s), (v = h.v), (h = h.h);
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

function getQueryStringValue(key) {
  // Get the query string from the current URL
  const queryString = window.location.search;

  // Create a new URLSearchParams object from the query string
  const searchParams = new URLSearchParams(queryString);

  // Use the get method to retrieve the value for the specified key
  const value = searchParams.get(key);

  return value;
}

function rainbow(p) {
  var rgb = HSVtoRGB((p / 100.0) * 0.85, 1.0, 1.0);
  return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};



export default function SangTable(props) {
  const [visList, setVisList] = useState([]);
  // console.log(props.espnPlayerMap)
  const mapNewVisList = (list, espnPlayerMap) => {
    let meanAndStdDev;
    // if(list.length < 50){
    //   meanAndStdDev =  calculateMeanAndStdDev(list.slice(0, 23));
    // } else{
    meanAndStdDev = calculateMeanAndStdDev(list);

    // }

    let mean = meanAndStdDev.meanValue;
    let stdDev = meanAndStdDev.stddevValue;

    setVisList(
      list.map((d) => {
        let percentile = calculatePercentile(mean, stdDev, d[1]) * 100;
        return {
          playerName: d[0],
          playerEV: d[1],
          calculatedColor: rainbow(100 - percentile),
          espnValues: espnPlayerMap.get(d[0]),
          percentile: percentile
        };
      })
    );
  };
  useEffect(() => {
    mapNewVisList(props.evList, props.espnPlayerMap);
  }, [props.evList]);
  return (
    <div className="SangTable">
      <table style={{}}>
        <tr>
          <th
            style={{
              width: "20px"
            }}
          ></th>
          <th
            style={window.mobileCheck() ? {
              width: "300px"
            } : {
              width: "450px"
            }}
          >
            Player {props.position}
          </th>
          <th
            style={{
              width: "46px"
            }}
          >
            EV
          </th>          
          {getQueryStringValue('isPro')=='thanksdude' ? (
            <>
              <th
                style={{
                  width: "46px"
                }}
              >
                ESPN actual
              </th>
              <th
                style={{
                  width: "46px"
                }}
              >
                ESPN proj
              </th>
            </>
          ) : <> </>}
        </tr>
        {visList.map((x, ix) => (
          <tr>
            <td
              style={{
                backgroundColor: x.calculatedColor,
                color: 
                 x.percentile > 75 && x.percentile < 83 ? "silver" : "white",
                border: "1px solid " + x.calculatedColor,
                borderRadius: "10px",
                whiteSpace: "nowrap",
                fontSize: ".5rem"
              }}
            >
              {ix + 1}
            </td>
            <td
              style={{
                backgroundColor: x.calculatedColor,
                color: 
                 x.percentile > 75 && x.percentile < 83 ? "silver" : "white",
                border: "1px solid " + x.calculatedColor,
                borderRadius: "10px",
                whiteSpace: "nowrap",
                textAlign: "left"
              }}
            >
              {
                <div
                  style={{
                    marginLeft: window.mobileCheck() ? .5*((1 / x.playerEV.toFixed(2)) * 2000 - 80) + "px" : (1 / x.playerEV.toFixed(2)) * 2000 - 80 + "px"
                  }}
                >
                  {x.playerName}
                </div>
              }
            </td>
            <td
              style={{
                backgroundColor: x.calculatedColor,
                color: 
                  x.percentile > 75 && x.percentile < 83 ? "silver" : "white",
                border: "1px solid " + x.calculatedColor,
                borderRadius: "10px",
                width: "100px"
              }}
            >
              {<div>{x.playerEV.toFixed(2)}</div>}
            </td>
            {getQueryStringValue('isPro')=='thanksdude' ? 
              <>
                <td
                  style={{
                    backgroundColor: x.calculatedColor,
                    color: x.percentile > 75 && x.percentile < 83 ? "silver" : "white",
                    border: "1px solid " + x.calculatedColor,
                    borderRadius: "10px",
                    width: "100px"
                  }}
                >
                  {<div>{x.espnValues?.act}</div>}
                </td>
                <td
                  style={{
                    backgroundColor: x.calculatedColor,
                    color: x.percentile > 75 && x.percentile < 83 ? "silver" : "white",
                    border: "1px solid " + x.calculatedColor,
                    borderRadius: "10px",
                    width: "100px"
                  }}
                >
                  {<div>{x.espnValues?.proj}</div>}
                </td>
              </>
              : <> </>
            }
          </tr>
        ))}
      </table>
    </div>
  );
}
