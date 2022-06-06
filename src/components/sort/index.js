import React, { useEffect, useState } from 'react';
import './style.scss';
import upArrow from "../../assets/up_arrow.svg";
import downArrow from "../../assets/down-arrow.svg";
import { useDispatch } from 'react-redux';
import { setSort } from '../../storage/redux/actions';


function Sorting() {
  const [selectedSort, setSelectedSort] = useState("price");
  const [selectedOrder, setSelectedOrder] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setSort(setSortingObject()));
    
  }, [selectedSort])

  useEffect(() => {

       dispatch(setSort(setSortingObject()));
  }, [selectedOrder]);


  const setSortingObject = () => {
        let sortObject = {};
        if (selectedSort === "name") {
          sortObject.name = selectedOrder;
        } else if (selectedSort === "price") {
          sortObject.price = selectedOrder;
        }
    return sortObject
  }

    return (
      <div className="sorting-wrapper">
        <div onClick={() => {
          if (selectedOrder === 1) {
            setSelectedOrder(-1);
          } else if (selectedOrder === -1) {
            setSelectedOrder(1);
          }
        }}>
          <img
            className={`arrow ${selectedOrder === -1 && "active"}`}
            src={upArrow}
            alt="sorting"
          
          />
          <img
            src={downArrow}
            className={`${selectedOrder === 1 && "active"}`}
            alt="sorting"
        
          />
        </div>
        <p> Sort By</p>
        <div className="sorting-selects">
          <form className="sort-form">
            <select
              onChange={(e) => {
                setSelectedSort(e.target.options[e.target.selectedIndex].value);
              }}
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </form>
        </div>
      </div>
    );
}

export default Sorting;