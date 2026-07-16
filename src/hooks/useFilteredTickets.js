import { useState, useMemo } from 'react';

export default function useFilteredTickets(tickets) {
  const [nameQuery, setNameQuery] = useState('');
  const [statusQuery, setStatusQuery] = useState('all');
  const [priorityQuery, setPriorityQuery] = useState('any');

  const filteredTickets = useMemo(
    () =>
      tickets.filter((t) => {
        if (
          nameQuery &&
          !t.subject.toLowerCase().includes(nameQuery.toLowerCase())
        )
          return false;
        if (statusQuery !== 'all' && t.status !== statusQuery) return false;
        if (priorityQuery !== 'any' && t.priority !== priorityQuery)
          return false;
        return true;
      }),
    [tickets, nameQuery, statusQuery, priorityQuery]
  );

  return {
    filteredTickets,
    nameQuery,
    setNameQuery,
    statusQuery,
    setStatusQuery,
    priorityQuery,
    setPriorityQuery,
  };
}
