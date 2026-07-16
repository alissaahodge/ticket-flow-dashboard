import React, {useEffect, useRef} from 'react';
import {Format} from '../utilities/Format';
import '../style.css';

export default function TicketDetailDialog({ ticket, setSelectedTicketFn }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (ticket) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [ticket]);

  return (
    <dialog ref={dialogRef}>
      {ticket && <>
      <h4>Ticket: {ticket.subject}</h4>
      <p>{Format.status(ticket.status)}</p>

      <button onClick={()=>setSelectedTicketFn(null)}>
        Close
      </button></>} 
    </dialog>
  );
}
