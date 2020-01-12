import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        {/*         <a href="#">
          <img src={Banner} alt="react-redux-boilerplate - Logo" />
        </a> */}
        <div className="nav-bar">
          <Link className="router-link" to="/">
            18xx
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
