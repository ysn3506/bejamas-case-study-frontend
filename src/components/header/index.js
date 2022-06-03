import React from 'react';
import './style.scss';
import logo from '../../assets/logo.svg'
import basket from "../../assets/basket.svg"


function Header(props) {
    return (
      <>
        <div class="ui grid header-wrapper">
          <div class="two wide column svg-wrapper">
            <img src={logo} className="logo" alt="bejamas" />
          </div>
          <div class="two wide column svg-wrapper basket">
            <img src={basket} className="basket" alt="bejamas" />
          </div>
        </div>
        <div className="ui divider" />
      </>
    );
}

export default Header;