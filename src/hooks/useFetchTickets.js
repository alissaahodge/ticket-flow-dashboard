import { useState, useEffect } from 'react';

export const MOCK_TICKETS = [
  { id: 1, subject: 'Login issue on mobile', requester: 'Maria Chen', status: 'new', priority: 'high' },
  { id: 2, subject: 'Refund request for order #4823', requester: 'James Okafor', status: 'in-progress', priority: 'medium' },
  { id: 3, subject: 'Feature request: dark mode', requester: 'Priya Patel', status: 'new', priority: 'low' },
  { id: 4, subject: 'Password reset not working', requester: 'Carlos Rivera', status: 'resolved', priority: 'high' },
  { id: 5, subject: 'Cannot upload profile photo', requester: 'Aisha Diallo', status: 'new', priority: 'medium' },
];

export default function useFetchTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    const timeoutId = setTimeout(() => {
      // realistically we'd need to catch errors and return errors too.
      setTickets(MOCK_TICKETS);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  return { tickets, loading, setTickets };
}
