import React from 'react';
import FilterBtn from './FilterBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './FilterBtns.scss';

const FilterBtns = () => {
  const topics = ['Popular', 'Upvoted', 'Discussed', 'Recent', 'Show most visited sites'];

  return (
    <div className='filter-btns'>
      <button type='button' className='filter-btns__icon'>
        <FontAwesomeIcon className='filter-btns__search' icon={faSearch} />
      </button>
      <div className='filter-btns__topics'>
        {topics.map((topic) => {
          return <FilterBtn topic={topic} key={topic} />;
        })}
      </div>
    </div>
  );
};

export default FilterBtns;
