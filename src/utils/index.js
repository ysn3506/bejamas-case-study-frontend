// import { useDispatch, useSelector } from "react-redux";
import { store } from "../storage/store";
// import { connect } from "react-redux";
import { addItem, cartDropDownToggled } from "../storage/redux/actions";

export const sortArray = (array, prop) =>
  array.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return 1;
    }
    if (a[prop] > b[prop]) {
      return -1;
    }
    return 0;
  }); 


export const addItemToCartList = (photo) => {
    store.dispatch(addItem(photo));
    const toggled = store.getState().reducer.dropDopwnToggled;
    if (!toggled) { 
        store.dispatch(cartDropDownToggled())
    }

  }

