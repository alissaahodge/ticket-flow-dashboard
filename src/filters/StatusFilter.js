import React from "react";
import {STATUS_OPTIONS} from "../utilities/StatusOptions";
import "../style.css";



export default function StatusFilter({setFn}) {

  return (
    <div>
      <select onChange={(e)=>setFn(e.target.value)}>
        {STATUS_OPTIONS.map((so)=> <option key={so.val} value={so.val}>{so.display}</option>)}
      </select>
    </div>
  );
}