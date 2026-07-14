export const STATUS_OPTIONS = [
  { val: 'all', display: 'All' },
  { val: 'new', display: 'New' },
  { val: 'in-progress', display: 'In progress' },
  { val: 'resolved', display: 'Resolved' },
  { val: 'closed', display: 'Closed' },
];

export const STATUS_OPTIONS_CYCLE = {
  new: 'in-progress',
  'in-progress': 'resolved',
  resolved: 'completed',
  completed: 'closed',
  closed: 'new'
};
