import React from 'react';
import './Greetings.css';

const getLanguage = (lang) => {
  switch (lang) {
    case 'de':
      return 'Hallo';
    case 'fr':
      return 'Bonjour';
    case 'en':
      return 'Good Morning';
    case 'es':
      return 'Holla';
  }
};

const Greetings = (props) => {
  return (
    <div className="greet-txt">
      <label>
        {getLanguage(props.lang)} {props.children}
      </label>
    </div>
  );
};

export default Greetings;
