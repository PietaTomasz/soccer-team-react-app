import React from 'react';
import './Header.css';

const Header = () => (
  <div className="header">
    <div>
      <i class="fas fa-info-circle"></i> | Info
    </div>
    <div>
      <i class="fas fa-futbol"></i> | Soccer Team
    </div>
    <div>
      <i class="fas fa-home"></i> | Contact
    </div>
  </div>
);

export default Header;