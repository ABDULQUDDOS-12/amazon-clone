import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './stateProvider'
const CheckoutProduct = ({img,title,price,rating}) => {
    const [{basket},dispatch] = useStateValue(); 
    const removeFromBasket=()=>{
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            price:price,
        })
     }
    return (
    <div className="checkoutProduct">
        <img src={img} className='checkoutProduct_image' />
        <div className="checkoutProduct_info">
            <p className='checkoutProduct_title'>{title}</p>
            <p className="checkoutProduct_price">
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating).fill().map((_,i)=>{
                   return <span key={i}>⭐</span>
                })}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct