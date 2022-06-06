import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDropDownToggled, clearCart } from "../../storage/redux/actions";
import CartItem from "../cart-item";
import "./style.scss";

const CartDropDown = () => {

  const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer.cartItems);
    const toggled = useSelector((state) => state.reducer.dropDopwnToggled);
  return (
    <div className={`cart-dropdown ${!toggled && "hidden"}`}>
      <div className="cart-items">
        {cartItems?.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} photo={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <div className="clear ">
        <div className="ui divider"/>
        <button className="add-to-cart clear-button" onClick={() => {
          dispatch(clearCart())
          dispatch(cartDropDownToggled())
        }}>CLEAR</button>
      </div>
    </div>
  );
};



export default CartDropDown;
