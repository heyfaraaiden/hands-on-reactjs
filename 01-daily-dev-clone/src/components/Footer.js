import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p className='footer__text'>
          Cloned with ReactJS &copy; 2021 by <a className='footer__author' href='https://github.com/heyfaraaiden'>@faraaiden</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
