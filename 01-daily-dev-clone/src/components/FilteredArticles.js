import React from 'react';
import ArticlesData from '../articles-database';
import Article from './Article';

import './FilteredArticles.scss';

const FilteredArticles = () => {
  return (
    <div className='filtered-articles'>
      {ArticlesData.map((article) => {
        return <Article article={article} key={article.id} />;
      })}
    </div>
  );
};

export default FilteredArticles;
