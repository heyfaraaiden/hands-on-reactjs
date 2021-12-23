import React from 'react';

import './FilterBtn.scss';

const FilterBtn = ({ topic }) => {
  return <button className='filter-btns__btn'>{topic}</button>;
};

export default FilterBtn;
