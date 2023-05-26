import React from 'react'
import './Payment.css'
import { useStateValue } from './stateProvider'
import CheckoutProduct from './CheckoutProduct';
const Payment = () => {
  const [{basket,user},dispatch] = useStateValue();
    return (
    <div className="payment">
        <div className="payment_container">
            {/* Payment section delievery address */}
            <div className="payment_section">
             <div className="payment_title">
                <h3>Delievery address</h3>
             </div>
             <div className="payment_Address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>

             </div>
            </div>
             {/* payment section - Review item */}
             <div className="payment_section">
            <div className="payment_title">
                <h3>Review items and delievery</h3>
             </div>
             <div className="payment_items">
                {basket.map(item=>{
                    <CheckoutProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    
                    />
                })}
             </div>
             </div>
             {/* Payment section = Payment method */}
             <div className="payment_section">
                
                </div>
        </div>
    </div>
    )
}

export default Payment