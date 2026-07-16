import React from 'react';
import { STATUS_OPTIONS } from '../utilities/StatusOptions';
import { Format } from '../utilities/Format';
import '../style.css';

export default function StatusBar({ tickets }) {
  const ticketsByStatus = tickets.reduce((acc, ticket) => {
    acc[ticket.status] = (acc[ticket.status] || 0) + 1;
    return acc;
  }, {});
  return (
    <div>
      {Object.entries(STATUS_OPTIONS)
        .filter(([status]) => status !== 'all')
        .map(([status, option]) => (
          <span key={status}>
            <b>{ticketsByStatus[status] || 0}</b> <i>{Format.status(status)} </i>
          </span>
        ))}
    </div>
  );
}
