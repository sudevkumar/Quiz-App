import React from "react";

function ResultTable() {
  return (
    <div className="">
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Results</td>
          </tr>
        </thead>

        <tbody className="table-body">
          <td>Sudev</td>
          <td>10</td>
          <td>50</td>
          <td>Pass</td>
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
