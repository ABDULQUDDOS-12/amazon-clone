import React from 'react'
import { useStateValue } from './stateProvider';
import "./Product.css"
const Product = ({title,img,price,rating}) => {
  const [{basket},dispatch]=useStateValue();
  console.log("This is the basket>>>",basket)
  const addToBasket=()=>{
          dispatch({
            type:'ADD_TO_BASKET',
            item:{
              title:title,
              img:img,
              price:price,
              rating:rating,
            }
          })
  }
  return (
    <>
<div className="product">
    <div className="product_info">
        <p>{title}</p>
        <p className='product_price'><small>$</small>
        <strong>{price}</strong></p>
        <div className="product_rating">
{Array(rating).fill().map((_,i)=>(
 <span key={i}>⭐</span>
))}
        </div>
    </div>
<img className='product_image' src={img} alt="" />
<button onClick={addToBasket} className='btn_basket'>Add to basket</button>
</div>
    </>
  )
}

export default Product