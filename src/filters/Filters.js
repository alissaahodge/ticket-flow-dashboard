import React from "react";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";


import "../style.css";

export default function Filters({nameQuery, setNameQuery, statusQuery, setStatusQuery, priorityQuery, setPriorityQuery}) {

  return (
    <div>
      <span>
        <input type="text" placeholder="Search By Ticket Name" value={nameQuery} onChange={(e)=>setNameQuery(e.target.value)}></input>
        <StatusFilter setFn={setStatusQuery}></StatusFilter>
        <PriorityFilter setFn={setPriorityQuery}></PriorityFilter>
      </span>
    </div>
  );
}