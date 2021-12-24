import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './SurveyAlert.scss';

const SurveyAlert = () => {
  return (
    <div className='survey-alert'>
      <div className='container survey-alert__container'>
        <p className='survey-alert__text'>
          <span className='strong'>Shape the future of daily.dev!</span> 1,000 free limited-edition stickers&nbsp;inside&nbsp;🎁
        </p>
        <a className='survey-alert__cta' href='https://daily.dev'>
          Start the survey
        </a>
        <button className='survey-alert__close-btn'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default SurveyAlert;
