import React from 'react';
import { STATUS_OPTIONS} from '../utilities/StatusOptions';
import '../style.css';

export default function StatusBar({ tickets }) {
  const ticketsByStatus = tickets.reduce((acc, ticket) => {
    acc[ticket.status] = (acc[ticket.status] || 0) + 1;
    return acc;
  }, {});
  return (
      <div>
        {STATUS_OPTIONS.filter((status)=>status.val!=="all").map((status)=> <span key={status.val}>{ticketsByStatus[status.val]} <i>{status.val}</i> </span>)}
      </div>
  );
}
