import React, { useState } from "react";
import Filtering from "../filter";
import Sorting from "../sort";
import Collection from "../item-card-collection";
import filterSettings from "../../assets/mobile-filter-icon.svg";
import "./style.scss";
import { useDispatch } from "react-redux";
import { setCategoryFilter, setPriceFilter } from "../../storage/redux/actions";

function Exhibiton(props) {
  const {
    photos,
    priceOptions,
    categoryOptions,
    totalNumberOfPhotos,
    paginatePhotos,
    numberOfShowingPhotos
  } = props;
  const [mobileFilterRendered, setMobileFilterRendered] = useState(false);
  const [mobileFilterActive, setMobileFilterActive] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <div className="ui grid header-wrapper exhibit">
        <div className="eleven wide column svg-wrapper">
          <h2>
            Photography / <span>Premium Photos</span>
          </h2>
        </div>
        <div className="five wide column svg-wrapper basket sort">
          <Sorting />
        </div>
        <div className="one wide column svg-wrapper basket sort mobile">
          <img
            src={filterSettings}
            alt="filter"
            onClick={() => {
              setMobileFilterRendered(true);
              setMobileFilterActive(true);
            }}
          />
          {mobileFilterRendered && (
            <div className={`mobile-filter ${mobileFilterActive && "active"}`}>
              <div className="sixteen column mobile-filter-close">
                <span>Filter</span>
                <button onClick={() => setMobileFilterActive(false)}>X</button>
              </div>
              <Filtering title="" options={categoryOptions} />
              <div className="ui divider" />
              <Filtering
                title="Price range"
                options={priceOptions}
                inlineFields
              />
              <div className="filter-button-group">
                <button
                  onClick={() => {
                    dispatch(setCategoryFilter([]));
                    dispatch(setPriceFilter([]));
                    setMobileFilterActive(false);
                    setMobileFilterRendered(false);
                  }}
                  className="clear-button"
                >
                  CLEAR
                </button>
                <button
                  onClick={() => setMobileFilterActive(false)}
                  className="clear-button reverse"
                >
                  SAVE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="ui stackable two column grid header-wrapper highlighted-descriptions exhibition-wrapper">
        <div className="two wide column filters">
          <Filtering title="Category" options={categoryOptions} />
          <div className="ui divider" />
          <Filtering title="Price range" options={priceOptions} inlineFields />
        </div>
        <div className="ui stackable twelve wide column slides">
          <Collection
            photos={photos}
            totalNumberOfPhotos={totalNumberOfPhotos}
            paginatePhotos={paginatePhotos}
            numberOfShowingPhotos={numberOfShowingPhotos}
          />
        </div>
      </div>
    </>
  );
}

export default Exhibiton;
