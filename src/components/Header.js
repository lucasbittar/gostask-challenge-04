import React from 'react';

import facebookLogo from '../assets/logo-facebook.svg';

function Header() {
  return (
    <header>
      <nav>
        <img src={facebookLogo} alt="Facebook" />
        <div className="profile-button">
          <span>Lucas B.</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
