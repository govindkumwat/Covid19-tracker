import React from "react";
import "./Table.css";
import { prettyPrintStat } from '../Utils/Utils';

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{prettyPrintStat(country.cases)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
