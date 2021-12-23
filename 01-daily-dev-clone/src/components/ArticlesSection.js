import React from 'react';
import FilterBtns from './FilterBtns';
import FilteredArticles from './FilteredArticles';

import './ArticlesSection.scss';

const ArticlesSection = () => {
  return (
    <section className='articles-section'>
      <div className='container'>
        <FilterBtns />
        <FilteredArticles />
      </div>
    </section>
  );
};

export default ArticlesSection;
