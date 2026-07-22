export const STATUS_OPTIONS = {
   'all': {display: 'All' },
   'new': {display: 'New' },
   'in-progress': {display: 'In progress' },
   'resolved': {display: 'Resolved' },
   'closed': {display: 'Closed' },
};

export const STATUS_OPTIONS_CYCLE = {
  new: 'in-progress',
  'in-progress': 'resolved',
  resolved: 'resolved',
  resolved: 'closed',
  closed: 'new'
};
