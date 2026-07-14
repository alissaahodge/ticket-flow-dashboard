import React from "react";
import StatusFilter from "./StatusFilter";
import "../style.css";

export default function Filters({nameQuery, setNameQuery, statusQuery, setStatusQuery}) {

  return (
    <div>
      <span>
        <input type="text" placeholder="Search By Ticket Name" value={nameQuery} onChange={(e)=>setNameQuery(e.target.value)}></input>
        <StatusFilter setFn={setStatusQuery}></StatusFilter>
      </span>
    </div>
  );
}