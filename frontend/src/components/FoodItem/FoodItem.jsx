import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const imageUrl = `${url}/images/${image}`;

  const itemCount = cartItems?.[id] || 0;

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img
          className='food-item-image'
          src={imageUrl}
          alt={name}
          onError={(e) => {
            e.target.src = assets.image_placeholder || '/default-image.png';
          }}
        />
        {
          itemCount === 0 ? (
            <img
              className='add'
              onClick={() => id && addToCart(id)}
              src={assets.add_icon_white}
              alt="Add"
            />
          ) : (
            <div className='food-item-counter'>
              <img onClick={() => id && removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
              <p>{itemCount}</p>
              <img onClick={() => id && addToCart(id)} src={assets.add_icon_green} alt="Add" />
            </div>
          )
        }
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
