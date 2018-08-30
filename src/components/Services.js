import React from 'react';
import Img from "gatsby-image";


const Services = (data) => (
  <section className="Services" id="services">

    <div className="Service wrapper">
      <div className="Service__text-container">
        <p className="Service__title title-underline">Weddings</p>
        <p className="Service__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, laboriosam ullam nisi, perferendis aut aperiam. Quisquam esse, assumenda illum quo.</p>
      </div>
      <Img
        fixed={data.ser1.childImageSharp.resolutions}
        alt=""
        className="Service__img"
      />
    </div>


    <div className="Service Service--img-left wrapper">
      <Img
        fixed={data.ser2.childImageSharp.resolutions}
        alt=""
        className="Service__img"
      />
      <div className="Service__text-container">
        <p className="Service__title title-underline">Senior Photos</p>
        <p className="Service__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fugiat sint minima laudantium reiciendis vel ea enim magni!</p>
      </div>
    </div>
  </section>
);

export default Services;
