import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  
  return (

    <div className={s.buttonSection}>
      
    {options.map(option =>  
    (<button className={s.button}
      key={option}
      onClick={onLeaveFeedback}>

        {option}
      
      </button>
    ))}
  </div>
)}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;