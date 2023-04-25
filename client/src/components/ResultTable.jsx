import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData("http://localhost:8080/api/results", (res) => setData(res));
  });

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

        <tbody>
          {!data ?? <div>No data Found</div>}
          {data.map((ele, ind) => (
            <tr className="table-body" key={ind}>
              <td>{ele?.username}</td>
              <td>{ele?.attempts}</td>
              <td>{ele?.points}</td>
              <td>{ele?.achived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
