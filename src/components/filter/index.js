import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter, setPriceFilter } from "../../storage/redux/actions";
import "./style.scss";

function Filtering(props) {
  const { title, options, inlineFields } = props;

  //inlineFields prop is created to provide single selecting feature on price filtering.


  const [filter, setFilter] = useState([]);
  const [selectedItem, setSelectedItem] = useState(undefined);
  const dispatch = useDispatch();

  const changeEventFunction = (e, item) => {
    if (e.target.checked) {
      if (inlineFields) {
        setSelectedItem(item[0]);
        setFilter(item);
        dispatch(setPriceFilter(item[1]));
      } else {
        const addCategory = [...filter, item];
        setFilter(addCategory);
        dispatch(setCategoryFilter(addCategory));
      }
    } else {
      if (inlineFields) {
        setSelectedItem(undefined);
        setFilter([]);
        dispatch(setPriceFilter([]));
      } else {
        const popFilter = filter.filter((f) => f !== item);
        setFilter(popFilter);
        dispatch(setCategoryFilter(popFilter));
      }
    }
  };

  return (
    <div className="filtering">
      <h3 className="filter-title">{title}</h3>
      <div className="ui list categories">
        {options.map((item) => (
          <div key={item} className={`ui checked checkbox category-options`}>
            <input
              type="checkbox"
              onChange={(e) => changeEventFunction(e, item)}
              checked={inlineFields && selectedItem === item[0]}
            />
            <label>{!inlineFields ? item : item[0]}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filtering;
