# Support Queue Dashboard

A React demo application modeling a customer support ticket queue. Built to demonstrate senior-level React patterns including custom hooks, memoization, component decomposition, and state management.

## Features

- Ticket list with search by subject
- Filter by status (new, in-progress, resolved, closed) and priority (low, medium, high)
- Advance tickets through workflow states with a single click
- View detailed ticket information in a modal
- Real-time status counts across the queue

## React Concepts Demonstrated

- **Custom hooks**: `useFilteredTickets` encapsulates filter state and derived data; `useFetchTickets` simulates async data loading with cleanup
- **Memoization**: `useMemo` on filter derivation to avoid unnecessary recomputation
- **Component decomposition**: Filters, cards, and dialog are separate concerns
- **Controlled inputs**: All form inputs are React-controlled
- **Effect cleanup**: `useFetchTickets` cleans up its simulated timeout on unmount
- **Refs**: Native `<dialog>` element controlled via `useRef`

## Project Structure
src/
├── App.js                  # Root component
├── hooks/
│   ├── useFetchTickets.js  # Simulates async ticket loading
│   └── useFilteredTickets.js  # Filter state + memoized filtering
├── components/
│   ├── TicketCard.js
│   └── TicketDetailDialog.js
├── filters/
│   ├── Filters.js
│   ├── StatusFilter.js
│   └── PriorityFilter.js
├── utilities/
│   ├── Format.js           # Centralized display formatting
│   └── StatusOptions.js    # Status enum + cycle mapping
└── style.css

## Running Locally

```bash
npm install
npm start
```

Opens at http://localhost:3000
