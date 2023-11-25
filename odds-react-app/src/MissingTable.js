import "./styles.css";
import React, { useState, useEffect } from "react";



export default function MissingTable(props) {
  return (
    <div className="MissingTable">
      <table style={{marginTop: '20px', fontSize:'12px'}}>
        <tr>
          <th
            style={{
              width: "300px"
            }}
          >
            Players missing all required props:
          </th>
        </tr>
        {props.missingList.map((player) => 
          <tr>
            <td>
                {player} 
            </td>
          </tr>        
        )}
      </table>
    </div>
  );
}
