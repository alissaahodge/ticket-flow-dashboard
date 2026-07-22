import React, {useState} from 'react';
import Filters from './filters/Filters';
import TicketCard from './components/TicketCard';
import StatusBar from './components/StatusBar';
import useFetchTickets from './hooks/useFetchTickets';
import useFilteredTickets from './hooks/useFilteredTickets';
import TicketDetailDialog from "./components/TicketDetailDialog";
import { STATUS_OPTIONS_CYCLE } from './utilities/StatusOptions';
import './style.css';

export default function App() {
  const { tickets, loading, setTickets } = useFetchTickets();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const { filteredTickets, nameQuery, setNameQuery, statusQuery, setStatusQuery, priorityQuery, setPriorityQuery } = useFilteredTickets(tickets);

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
        priorityQuery={priorityQuery}
        setPriorityQuery={setPriorityQuery} 
      ></Filters>
      <div>
        Tickets list {loading && <span>loading...</span>}
        {!loading && !filteredTickets.length && <div>Currently no tickets..</div>}
        {!loading && filteredTickets.length && <StatusBar tickets={filteredTickets}></StatusBar>}
        <ul>
          {!loading &&
            filteredTickets.map((t) => (
              <TicketCard
                setSelectedTicket={setSelectedTicket}
                key={t.id}
                ticket={t}
                cycleFn={advanceTicketCycle}
              ></TicketCard>
            ))}
        </ul>
      </div>
      <TicketDetailDialog ticket={selectedTicket} setSelectedTicketFn={setSelectedTicket}></TicketDetailDialog>
    </div>
  );
}
