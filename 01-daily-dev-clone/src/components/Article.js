import React from 'react';

import './Article.scss';

const Article = ({ article }) => {
  const { logo, title, date, readTime, img, vote, comment } = article;

  // published data
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  // readtime
  let readtimeData = readTime.split(' ');
  const unitOfTime = readtimeData[1][0];
  readtimeData = readtimeData[0] + unitOfTime;

  return (
    <article className='article'>
      <header className='article__header'>
        <a href='https://daily.dev'>
          <img src={logo} alt='Creator Logo' className='article__logo' />
        </a>
        <div className='article__text'>
          <h3 className='article__title'>{title}</h3>
          <div className='article__info'>
            <small className='article__published'>{`${month}, ${day} ${year}`}</small> &#183; <small className='article__read-time'>{readtimeData} read time</small>
          </div>
        </div>
      </header>
      <div className='article__img'>
        <img src={img} alt={title} />
      </div>
      <footer className='article__footer'>
        <button className='article__vote'>
          <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.162 3.813a2 2 0 01.465.465l6.674 9.343a1 1 0 01-1.102 1.539l-4.032-1.21a1 1 0 00-1.277.816l-.767 5.375a1 1 0 01-.99.859h-.266a1 1 0 01-.99-.859l-.767-5.375a1 1 0 00-1.278-.816l-4.031 1.21a1 1 0 01-1.102-1.54l6.674-9.342a2 2 0 012.79-.465z'
              fill='currentcolor'
              fillRule='evenodd'
            ></path>
          </svg>
          <span className='article__vote-number'>{vote}</span>
        </button>
        <button className='article__comment'>
          <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.5 3.75l.335.036c1.098.123 1.779.356 2.365.727a3.62 3.62 0 011.34 1.496c.303.624.46 1.326.46 2.43v4.769a3.59 3.59 0 01-3 3.541l-2.565.428a2.29 2.29 0 00-.324.067.847.847 0 00-.189.084l-.076.05c-.043.03-.098.073-.19.147l-3.094 2.765A.961.961 0 0110 19.54v-.866c0-.41-.037-.85-.11-1.003a.903.903 0 00-.323-.372c-.142-.094-.284-.152-.69-.21l-2.377-.34a4.153 4.153 0 01-1.821-.715 3.93 3.93 0 01-1.228-1.416A4.153 4.153 0 013 12.714V8.44c0-1.105.157-1.807.46-2.43A3.619 3.619 0 014.8 4.512c.586-.37 1.267-.604 2.365-.727L7.5 3.75a40.75 40.75 0 019 0zm-.5 7.5H8a1 1 0 00-.117 1.993l.117.006h8a1 1 0 00.117-1.993L16 11.249zm0-4H8a1 1 0 00-.117 1.993L8 9.249h8a1 1 0 00.117-1.993L16 7.249z'
              fill='currentcolor'
              fillRule='evenodd'
            ></path>
          </svg>
          <span className='article__comment-number'>{comment}</span>
        </button>
        <button className='article__save'>
          <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.828 4h8.343a2 2 0 011.996 1.878l.83 13.591a.5.5 0 01-.795.433l-5.608-4.144a1 1 0 00-1.189 0l-5.608 4.144a.5.5 0 01-.796-.433l.83-13.591A2 2 0 017.829 4z' fill='currentcolor' fillRule='evenodd'></path>
          </svg>
        </button>
      </footer>
    </article>
  );
};

export default Article;
