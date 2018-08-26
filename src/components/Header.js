import React from 'react'
// import ReactDOM from 'react-dom';

class Header extends React.Component {
  state = {
    checked: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.closeMenu);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeMenu);
  }

  closeMenu = () => {
    this.setState({checked: false})
  }

  render() {
    return (
      <header className="Header">
        <nav className="Header__nav">
          <div className="Header__nav-inner wrapper">
            <p className="Header__logo">Shooter</p>
            <ul className="desktop-nav">
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
            <div className="mobile-nav">

              <label className="mobile-nav__label" htmlFor="mobile-nav__toggle">Menu</label>
              <input type="checkbox" name="mobile-nav__toggle" className="mobile-nav__toggle" checked={this.state.checked} onChange={() => {
                this.setState((prevState) => (
                  {checked: !prevState.checked}
                ))
              }}/>

              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="mobile-nav__menu-container">
                <ul className="mobile-nav__menu">
                  <li><a href="#about" onClick={this.closeMenu}>Home</a></li>
                  <li><a href="#about" onClick={this.closeMenu}>About</a></li>
                  <li><a href="#about" onClick={this.closeMenu}>Services</a></li>
                  <li><a href="#about" onClick={this.closeMenu}>Portfolio</a></li>
                  <li><a href="#about" onClick={this.closeMenu}>Contact</a></li>
                </ul>
              </div>

            </div>
          </div>
        </nav>
        <div className="Header__text-container">
          <p className="Header__title">Shooter</p>
          <div className="divider"></div>
          <p className="Header__subtitle">Photography Studio</p>
        </div>
      </header>
    )
  }
}
export default Header;
