import React from 'react'
import './Checkout.css'
import checkoutBanner from './images/ad_banner.jpg'
import Subtotal from './Subtotal'
import { useStateValue } from './stateProvider'
import CheckoutProduct from './CheckoutProduct'
const Checkout = () => {
  const [{basket,user}] = useStateValue();
  return (
    <>
    <div className='checkout'>
        <div className="checkout_left">
            <img src={checkoutBanner} alt="" className="checkout_ad" />
            <div>
              <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map(item=>(
               <CheckoutProduct
               title={item.title}
               img={item.img}
               price={item.price}
               rating={item.rating}
               />
            ))}
           
           {/* CheckoutProduct */}
           {/* CheckoutProduct */}
           {/* CheckoutProduct */}
           {/* CheckoutProduct */}
           {/* CheckoutProduct */}
            </div>
        </div>
        <div className="checkout_right">
         <Subtotal/>
        </div>
    </div>
    </>
  )
}

export default Checkout