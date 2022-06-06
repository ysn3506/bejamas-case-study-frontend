import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { cartDropDownToggled } from '../../storage/redux/actions';
import './style.scss';
import logo from '../../assets/logo.svg'
import basket from "../../assets/basket.svg"
import CartDropDown from '../cart';





function Header(props) {

  const [numberofItems, setNumberOfItems] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer.cartItems);




  useEffect(() => {

    setNumberOfItems(cartItems?.length);

  },[cartItems])

    return (
      <div className="header-main">
        <div className="ui grid header-wrapper">
          <div className="two wide column svg-wrapper">
            <img src={logo} className="logo" alt="bejamas" />
          </div>
          <div className="two wide column svg-wrapper basket">
            <img
              src={basket}
              className="basket"
              alt="basket"
              onClick={() => dispatch(cartDropDownToggled())}
            />

            {numberofItems !== 0 && (
              <div className="number-of-items">{numberofItems}</div>
            )}
          
              <CartDropDown />
          </div>
        </div>
        <div className="ui divider" />
      </div>
    );
}

export default Header;