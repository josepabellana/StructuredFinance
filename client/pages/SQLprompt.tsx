import React, { useState } from "react";
import { useQuery } from "react-query";
// import { executeSql } from "./sql-service"; // your service to execute SQL statements

const SqlPrompt = () => {
  const [query, setQuery] = useState("");
  const [error] = useState("");
  const [results] = useState([]);
  return (
    <>
      <textarea value={query} onChange={(e) => setQuery(e.target.value)} id="sql-query"/>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => setQuery("")}>Clear</button>
      <button
        onClick={async () => {
        //   setResults(await executeSql(query));
        }}
      >
        Run
      </button>
      <table>
        <thead>
          <tr>
            {results.length > 0 &&
              Object.keys(results[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value:any, index:number) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SqlPrompt;


