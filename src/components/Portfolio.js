import React from 'react';
import gr1 from '../images/gr1.jpeg';
import gr2 from '../images/gr2.jpeg';
import gr3 from '../images/gr3.jpeg';
import gr4 from '../images/gr4.jpeg';

const Portfolio = () => (
  <div className="Portfolio wrapper" id="portfolio">
    <p className="Portfolio__title">Portfolio</p>
    <div className="divider"></div>
    <div className="Portfolio__grid">
      <div>
        <img src={gr1} alt="" className="Portfolio__img one"/>
      </div>
      <div>
        <img src={gr2} alt="" className="Portfolio__img"/>
      </div>
      <div>
        <img src={gr3} alt="" className="Portfolio__img"/>
      </div>
      <div>
        <img src={gr4} alt="" className="Portfolio__img"/>
      </div>
    </div>
  </div>
);

export default Portfolio;
