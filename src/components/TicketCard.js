import React, { useState }  from 'react';
import {Format} from '../utilities/Format';
import '../style.css';

export default function TicketCard({ ticket, setSelectedTicket, cycleFn }) {
  return (
    <li>
      {ticket.subject}: {Format.status(ticket.status)}{' '}
      <button className={ticket.status} onClick={() => cycleFn(ticket.id)}>
        Advance
      </button>
      <button className="ml-1" onClick={()=>setSelectedTicket(ticket)}>View</button>
    </li>
  );
}
