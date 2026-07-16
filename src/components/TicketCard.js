import React, { useState }  from 'react';
import {Format} from '../utilities/Format';
import TicketDetailDialog from "./TicketDetailDialog"
import '../style.css';

export default function TicketCard({ ticket, cycleFn }) {
  const [selectedTicket, setSelectedTicket] = useState(null);
  return (
    <li>
      {ticket.subject}: {Format.status(ticket.status)}{' '}
      <button className={ticket.status} onClick={() => cycleFn(ticket.id)}>
        Advance
      </button>
      <button className="ml-1" onClick={()=>setSelectedTicket(ticket)}>View</button>
      <TicketDetailDialog ticket={selectedTicket} setSelectedTicketFn={setSelectedTicket}></TicketDetailDialog>
    </li>
  );
}
