import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './stateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
const Payment = () => {
const navigate = useNavigate();
  const [{basket,user},dispatch] = useStateValue();
  const [error,setError] = useState(null);
  const [disabled,setDisabled] = useState(true);
  const [succeeded,setSucceeded]=useState(false);
  const[processing,setProcessing] = useState("");
  const stripe = useStripe();
   const elements = useElements();
   const [clientSecret,setClientSecret] = useState(true);
  useEffect(()=>{
     //generate the special stripe secret which allows us to charge a customer
   const getClientSecret = async()=>{
const response = await axios({
   method:'post',
   //stripe expects the total in a currencies submits
   url:`/payment/create?total=${getBasketTotal(basket)*100}`,
});
setClientSecret(response.data.clientSecret)
   }
getClientSecret();
   },[basket])
   console.log('The secret is >>>',clientSecret)
   const handleSubmit = async (e) =>{
      //do all the fancy stripe things
       e.preventDefault();
       setProcessing(true);
       const payload = await stripe.configureCardPayment(clientSecret,{
         payment_method:{
            card:elements.getElement(CardElement)
         }
       }).then(({paymentIntent})=>{
         //paymentIntent = payment confirmation
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        dispatch({
         type:'EMPTY_BASKET',
        })
      })
      navigate('/orders') 
      
   }
   const handleChange =e=>{
       //Listen for changes in the card Element
       //and display any errors as the customer types their card details
       setDisabled(e.empty);
       setError(e.error? e.error.message:"");
      }
  return (
    <div className="payment">
        <div className="payment_container">
         <h1>
            Checkout (
            <Link to="/checkout">{basket?.length} items</Link>
            )
            </h1>
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
                   return( <CheckoutProduct
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    rating={item.rating}
                    
                    />)
                })}
             </div>
             </div>
             {/* Payment section = Payment method */}

             <div className="payment_section">
                <div className="payment_title">
                  <h3>Payment method</h3>
                </div>
                <div className="payment_details">
                  <form onSubmit={handleSubmit}>
                     <CardElement onChange={handleChange}/>
                     <div className="payment_priceContainer">
                        <CurrencyFormat 
                        renderText = {(value)=>(
                           <>
                           <h3>Order Total: {value}</h3>
                           </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                           <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                        </button>
                     </div>
                     {error && <div>{error}</div>}
                  </form>

                </div>
                </div>
        </div>
    </div>
    )
}

export default Payment