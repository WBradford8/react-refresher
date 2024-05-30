import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>Incomplete</button>
      <button onClick={() => setFilter('complete')} className={filter === 'complete' ? 'active' : ''}>Complete</button>
    </div>
  );
}

export default Filter;