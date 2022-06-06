import React from 'react';
import { addItemToCartList } from '../../utils';
import './style.scss'

function ItemCard(props) {
    const { photo } = props;
    return (
      <div className="item-card-wrapper"
      onClick={()=>{addItemToCartList(photo)}}>
        <div className="item-card-photo" style={{backgroundImage:`url(${photo.image.src.medium})`}}>
          <div className={`bestseller ${photo.bestseller && "active"}`}>
            Best Seller
          </div>
          <div className="add-to-cart">ADD TO CART</div>
        </div>
        <div className="item-card-description">
          <p className="description-category">{photo.category}</p>
          <p className="description-name">{photo.name}</p>
          <p className="description-price">{`$${photo.price}`}</p>
        </div>
      </div>
    );
}

export default ItemCard;