import React from 'react';
import './style.scss';


const CartItem = (props) => {
  
    const { photo } = props;
    return <div className="ui two wide column cart-item-wrapper ">
        <div className='column description'>
            <p className='name'>{photo.name}</p>
            <p className='price'>{`$${photo.price}`}</p>

        </div>
        <div className='column cart-item-photo'>
            <img src={photo.image.src.tiny} alt={photo.name}/>
        </div>

    </div>;
};

export default CartItem;