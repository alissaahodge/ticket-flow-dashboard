import React from 'react';
import '../style.css';

export default function TicketCard({ ticket, cycleFn }) {
  return (
      <li>
        {ticket.name}: {ticket.status}{' '}
        <button className={ticket.status} onClick={() => cycleFn(ticket.id)}>
          Advance
        </button>
      </li>
  );
}
