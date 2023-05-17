import PropTypes from 'prop-types';
import React from "react";
import s from './Section.module.css'

const Section = ({title, children }) => (
 
  <div className={s.sectionStatistic}>
    <h2 >{title}</h2>
    {children}
  
  </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default Section;