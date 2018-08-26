import React from 'react';

const Services = () => (
  <section className="Services" id="services">

    <div className="Service wrapper">
      <div className="Service__text-container">
        <p className="Service__title title-underline">Weddings</p>
        <p className="Service__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, laboriosam ullam nisi, perferendis aut aperiam. Quisquam esse, assumenda illum quo.</p>
      </div>
      <img src='https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23b3d491e57a3ce6249165608da56fdf&auto=format&fit=crop&w=634&q=80' alt="" className="Service__img"/>
    </div>


    <div className="Service Service--img-left wrapper">
      <div className="Service__text-container">
        <p className="Service__title title-underline">Senior Photos</p>
        <p className="Service__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fugiat sint minima laudantium reiciendis vel ea enim magni!</p>
      </div>
      <img src='https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be65ab7d411929c176f6ded8f1b8bb99&auto=format&fit=crop&w=634&q=80' alt="" className="Service__img"/>
    </div>


  </section>
);

export default Services;
