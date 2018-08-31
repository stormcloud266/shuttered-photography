import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class BlogHeader extends React.Component {
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
    const isBlogPost = this.props.blogPost
    // const headerBg = isBlogPost && `linear-gradient(rgba(20,19,17,.9), rgba(20,19,17,.9)), url(${this.props.img})`

    return (
      <header
        className={`Header Header--blog ${this.props.blogPost && 'Header--blog-post'}`}
        id="top"
        // style={{ backgroundImage: headerBg }}
      >
        <nav className="Header__nav">
          <div className="Header__nav-inner wrapper">
            <p className="Header__logo">Shuttered</p>
            <ul className="desktop-nav">
              <li><Link to='/'>Home</Link></li>
              { isBlogPost ? <li><Link to='/blog'>Blog</Link></li> : <li><AnchorLink href='#latest' offset='100'>Latest</AnchorLink></li>}
              <li><AnchorLink href='#contact'>Contact</AnchorLink></li>
              <li><AnchorLink href='#top' offset='76'>Top</AnchorLink></li>

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
                  <li><Link to='/'>Home</Link></li>
                  { isBlogPost && <li><Link to='/blog'>Blog</Link></li> }
                  <li><AnchorLink href='#contact'>Contact</AnchorLink></li>
                  <li><AnchorLink href='#top' offset='76'>Top</AnchorLink></li>
                </ul>
              </div>

            </div>
          </div>
        </nav>
        <div className="Header__text-container">
          <h1 className="Header__title">
            {isBlogPost ? this.props.title : 'Shuttered Blog'}
          </h1>
          <div className="divider"></div>
          <p className="Header__subtitle">
            {isBlogPost ? this.props.subtitle : 'Cool and Unique Photography Tips'}
          </p>
        </div>
      </header>
    )
  }
};
export default BlogHeader;
