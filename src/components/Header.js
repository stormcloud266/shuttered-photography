import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


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
      <header className="Header" id="top">
        <nav className="Header__nav">
          <div className="Header__nav-inner wrapper">
            <p className="Header__logo">Shuttered</p>
            <ul className="desktop-nav">
              <li><AnchorLink href='#about'>About</AnchorLink></li>
              <li><AnchorLink href='#services' offset='200'>Services</AnchorLink></li>
              <li><AnchorLink href='#portfolio' offset='50'>Portfolio</AnchorLink></li>
              <li><AnchorLink href='#contact'>Contact</AnchorLink></li>
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

                  <li><AnchorLink href='#top' onClick={this.closeMenu} offset='100'>Home</AnchorLink></li>
                  <li><AnchorLink href='#about' onClick={this.closeMenu} offset='100'>About</AnchorLink></li>
                  <li><AnchorLink href='#services' onClick={this.closeMenu} offset='120'>Services</AnchorLink></li>
                  <li><AnchorLink href='#portfolio' onClick={this.closeMenu} offset='100'>Portfolio</AnchorLink></li>
                  <li><AnchorLink href='#contact' onClick={this.closeMenu} offset='100'>Contact</AnchorLink></li>

                </ul>
              </div>

            </div>
          </div>
        </nav>
        <div className="Header__text-container">
          <p className="Header__title">Shuttered</p>
          <div className="divider"></div>
          <p className="Header__subtitle">Photography Studio</p>
        </div>
      </header>
    )
  }
}
export default Header;
