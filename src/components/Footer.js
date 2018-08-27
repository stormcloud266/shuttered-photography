import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <section className="Footer" id="contact">
    <div className="Footer__inner wrapper">
      <div className="Footer__text-container">
        <p className="Footer__title title-underline">Contact</p>
        <div className="Footer__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure harum magnam quam quis atque temporibus incidunt adipisci quidem velit quos.</div>
        <div className="Footer__contact-info">
          <span>Phone:</span>
          <p>(123) 456 - 7890</p>
        </div>
        <div className="Footer__contact-info">
          <span>Email:</span>
          <p>photography@example.com</p>
        </div>
        <div className="Footer__icons-container">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <FontAwesomeIcon icon={['fab', 'flickr']} />
        </div>
      </div>

      <form action="" className="Footer__form">
        <div className="Footer__form-item">
          <label htmlFor="">Name</label>
          <input type="text"/>
        </div>
        <div className="Footer__form-item">
          <label htmlFor="">Email</label>
          <input type="text"/>
        </div>
        <div className="Footer__form-item">
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="" rows=""></textarea>
        </div>
        <button className="Footer__button button">Send Message</button>
      </form>
    </div>
  </section>
);

export default Footer;
