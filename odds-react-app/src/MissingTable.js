import "./styles.css";
import React, { useState, useEffect } from "react";

export default function MissingTable(props) {
  return (
    <div className="MissingTable">
      <table style={{ marginTop: "20px", fontSize: "12px" }}>
        <tr>
          {props.selectedPosition !== 99 && props.selectedPosition !== 98 ? (
            <th
              style={{
                width: "300px",
              }}
            >
              Players missing all required props:
            </th>
          ) : (
            <th
              style={{
                width: "300px",
              }}
            ></th>
          )}
        </tr>
        {props.missingList.map((player) => (
          <tr>
            <td>{player}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
