import React from 'react';

const Service = (props) => (
  <div className="Service wrapper">
    <div className="Services__text-container">
      <p className="Service__title title-underline">{props.title}</p>
      <p className="Service__body">{props.body}</p>
    </div>
    <img src={props.src} alt="" className="Service__img"/>
  </div>
);

export default Service;
