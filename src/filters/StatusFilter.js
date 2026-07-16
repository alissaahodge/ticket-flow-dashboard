import React from 'react';
import { Format } from '../utilities/Format';
import { STATUS_OPTIONS } from '../utilities/StatusOptions';

import '../style.css';

export default function StatusFilter({ setFn }) {
  return (
    <div>
      <label>Status: </label>
      <select onChange={(e) => setFn(e.target.value)}>
        {Object.entries(STATUS_OPTIONS).map(([val, so]) => (
          <option key={val} value={val}>
            {Format.status(val)}
          </option>
        ))}
      </select>
    </div>
  );
}
