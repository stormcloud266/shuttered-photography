import React from 'react'

const Footer = (props) => (
  <section className="Footer">
    <div className="Footer__inner wrapper">
      <div className="Footer__text-container">
        <p className="Footer__title title-underline">Contact</p>
        <div className="Footer__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure harum magnam quam quis atque temporibus incidunt adipisci quidem velit quos.</div>
        <div className="Footer__icons-container">

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
        <button className="Footer__button">Send Message</button>
      </form>
    </div>
  </section>
)

export default Footer;
