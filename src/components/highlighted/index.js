import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPhotos } from "../../services/apis";
import { addItemToCartList } from "../../utils";
import Recommendation from "../recommendation";
import './style.scss';

function Highlighted(props) {
    const { photo } = props;
    const [relatedPhotos, setRelatedPhotos] = useState([]);

  const dispatch = useDispatch();


  useEffect(() => {

      getPhotos({category:photo.category}).then((res) => {
            setRelatedPhotos(res.photos.slice(0,3));
        }).catch((error) => {
            console.log(error)
        })
    },[])

  return (
    <div className="highlighted-wrapper">
      <div className="ui stackable grid header-wrapper">
        <div className="eight wide column svg-wrapper">{photo.name}</div>
        <div className="eight wide column svg-wrapper basket">
          <button
            className="ui secondary button add-to-cart"
            onClick={() => addItemToCartList(photo)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="highlighted-photo">
        <img src={photo.image.src.landscape} alt={photo.image.alt} />
        <div className="photo-of-day"> Photo of the day</div>
      </div>
      <div className="mobile-add-to-cart">
        <button
          className="ui secondary button add-to-cart"
          onClick={() => addItemToCartList(photo)}
        >
          ADD TO CART
        </button>
      </div>
      <div className="ui stackable two column grid header-wrapper highlighted-descriptions">
        <div className="eight wide column">
          <div className="highlighted-description">
            <h2 className="highlighted-name">{`About ${photo.name}`}</h2>
            <h2 className="highlighted-category">{photo.category}</h2>
            <p className="highlighted-description">{photo.description}</p>
          </div>
        </div>
        <div className="eight wide column basket">
          <Recommendation recommendations={relatedPhotos} />
          <div className="details">
            <p>Details</p>
            <p>{`Size: ${photo.details.width} x ${photo.details.width} pixel`}</p>
            <p>{`Size: ${Math.floor(
              (photo.details.width * photo.details.height) / 1000000
            )} mb`}</p>
          </div>
        </div>
        <div className="ui divider" />
      </div>
    </div>
  );
}

export default Highlighted;
