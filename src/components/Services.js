import React from 'react';
import ser1 from '../images/ser1.jpeg';
import ser2 from '../images/ser2.jpeg';

const Services = () => (
  <section className="Services" id="services">

    <div className="Service wrapper">
      <div className="Service__text-container">
        <p className="Service__title title-underline">Weddings</p>
        <p className="Service__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, laboriosam ullam nisi, perferendis aut aperiam. Quisquam esse, assumenda illum quo.</p>
      </div>
      <img src={ser1} alt="" className="Service__img"/>
    </div>


    <div className="Service Service--img-left wrapper">
      <div className="Service__text-container">
        <p className="Service__title title-underline">Senior Photos</p>
        <p className="Service__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fugiat sint minima laudantium reiciendis vel ea enim magni!</p>
      </div>
      <img src={ser2} alt="" className="Service__img"/>
    </div>


  </section>
);

export default Services;
