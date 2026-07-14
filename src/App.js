import React, { useState } from 'react';
import Filters from './filters/Filters';
import TicketCard from './components/TicketCard';
import StatusBar from './components/StatusBar';
import { useFetchTickets } from './utilities/useFetchTickets';
import { STATUS_OPTIONS_CYCLE } from './utilities/StatusOptions';
import './style.css';

export default function App() {
  const [nameQuery, setNameQuery] = useState("");
  const [statusQuery, setStatusQuery] = useState('all');
  const { tickets, loading, setTickets } = useFetchTickets();

  const filteredTickets = tickets.filter((t) => {
    if (nameQuery && !t.name.toLowerCase().includes(nameQuery.toLowerCase()))
      return false;
    if (statusQuery !== 'all' && t.status !== statusQuery) return false;
    return true;
  });

  const advanceTicketCycle = (id) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        return { ...t, status: STATUS_OPTIONS_CYCLE[t.status] };
      })
    );
  };

  return (
    <div>
      <h1>Ticket Flow Dashboard</h1>
      <Filters
        nameQuery={nameQuery}
        setNameQuery={setNameQuery}
        statusQuery={statusQuery}
        setStatusQuery={setStatusQuery}
      ></Filters>
      <div>
        Tickets list {loading && <span>loading...</span>}
        {!loading && <StatusBar tickets={filteredTickets}></StatusBar>}
        <ul>
          {!loading &&
            filteredTickets.map((t) => (
              <TicketCard
                key={t.id}
                ticket={t}
                cycleFn={advanceTicketCycle}
              ></TicketCard>
            ))}
        </ul>
      </div>
    </div>
  );
}
