import React from 'react';
import { NavbarWrapper } from './navbar.styles';
import * as PropTypes from 'prop-types';

class Navbar extends React.PureComponent {

  render() {
    return (
      <NavbarWrapper>
        <nav className='navbar-top clearfix fixed-top'>
          <ul>
            
            <li>
              <span className='float-right' style={{ marginTop: '11px' }}>
                {"Bunny Studio"}
              </span>
            </li>
          </ul>
        </nav>
      </NavbarWrapper>
    );
  }
}

Navbar.propTypes = {
  overlay: PropTypes.any
};

export default (Navbar);
