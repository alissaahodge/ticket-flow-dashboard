import React from "react";
import "../style.css";

export const PRIORITY_OPTIONS = {
  'any': {display: 'Any' },
  'medium': {display: 'Medium' },
  'low': {display: 'low' },
  'high': {display: 'High' },
};

export default function PriorityFilter({setFn}) {

  return (
    <div>
      <label>Priority: </label>
      <select onChange={(e) => setFn(e.target.value)}>
        {Object.entries(PRIORITY_OPTIONS).map(([val, po]) => (
          <option key={val} value={val}>
            {po.display}
          </option>
        ))}
      </select>
    </div>
  );
}