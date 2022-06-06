import React, { useEffect, useState } from "react";
import { getPhotos } from "../../services/apis";
import { useSelector } from "react-redux";
import "./style.scss";

function Pagination(props) {
  const { totalNumberOfPhotos, paginatePhotos } = props;
  const [activePage, setActivePage] = useState(1);
  const [currentPages, setCurrentPages] = useState([1, 2, 3]);
  const filters = useSelector((state) => state.reducer.filters);
  const sort = useSelector((state) => state.reducer.sort);

  useEffect(() => {
   getPhotos(filterToRequest(filters), sort || {price:1}).then((res) => {
      paginatePhotos(res.photos);
    });
  }, [activePage]);

  useEffect(() => {
    setActivePage(1);

    if (totalNumberOfPhotos > 12) {
      setCurrentPages([1, 2, 3]);
    } else {
      const pages = [];
      for (let i = 1; i <= Math.ceil(totalNumberOfPhotos / 6); i++) {
        pages.push(i);
      }
      setCurrentPages(pages);
    }
  }, [filters, totalNumberOfPhotos]);

  const filterToRequest = (obj) => {
    const filterToSend = {};
    if (obj.categories.length > 0) filterToSend.categories = obj.categories;
    if (obj.price.length > 0) filterToSend.price = obj.price;
    filterToSend.page = activePage - 1; //Because of backend API
    return filterToSend;
  };

  const increasePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalNumberOfPhotos / 6); i++) {
      pages.push(i);
    }

    let nextPages = [pages - 2, pages - 1, pages];
    if (currentPages[currentPages.length - 1] !== pages.length) {
      nextPages = currentPages.map((item) => item + 1);
      setCurrentPages(nextPages);
    }
  };

  const decreasePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalNumberOfPhotos / 6); i++) {
      pages.push(i);
    }

    let prevPages = [1, 2, 3];
    if (currentPages[0] !== 1) {
      prevPages = currentPages.map((item) => item - 1);
      setCurrentPages(prevPages);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalNumberOfPhotos / 6); i++) {
      pages.push(i);
    }

    return currentPages.map((item) => (
      <a
        onClick={() => {
          setActivePage(item);
        }}
        aria-current="false"
        aria-disabled="false"
        tabIndex={`${item - 1}`}
        value={`${item}`}
        aria-label="page item"
        type="prevItem"
        className={`item ${activePage === item && "active"}`}
      >
        {item}
      </a>
    ));
  };

  return (
    <div
      aria-label="Pagination Navigation"
      role="navigation"
      className="ui pagination pointing secondary menu page-paginator"
    >
      <a
        aria-current="false"
        onClick={() => {
          decreasePageNumbers();
        }}
        aria-disabled="false"
        tabIndex="0"
        value="1"
        aria-label="Previous item"
        type="prevItem"
        className="item arrow"
      >
        {`<`}
      </a>

      {renderPageNumbers()}
      <a
        aria-current="false"
        aria-disabled="false"
        onClick={() => {
          increasePageNumbers();
        }}
        tabIndex="0"
        value="0"
        aria-label="Next item"
        type="nextItem"
        className="item arrow"
      >
        {`>`}
      </a>
    </div>
  );
}

export default Pagination;
