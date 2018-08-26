import React from 'react'

const Header = () => (
  <header className="Header">
    <nav className="Header__nav">
      <div className="Header__nav-inner wrapper">
        <p className="Header__logo">Shooter</p>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="Header__text-container">
      <p className="Header__title">Shooter</p>
      <div className="divider"></div>
      <p className="Header__subtitle">Photo Gallery</p>
    </div>
  </header>
);

export default Header;
