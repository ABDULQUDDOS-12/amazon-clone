import React,{useEffect} from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {auth} from "./firebase"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useStateValue } from "./stateProvider";
const promise = loadStripe('pk_test_51NCHF9B7Kf7VS2uXXWSqC34egnLIkvPqssaVVLpPHsNc99Rwzi3BkLHPWWlqqKzx3MJejbpZrRphOmIcrpR1WgjC00uAqf5brv');
function App() {
   const[{},dispatch]=useStateValue();
  useEffect(()=>{
   //will only run once when the app component loads...
  auth.onAuthStateChanged(authUser=>{
    console.log("The user is >>>",authUser);
    if(authUser){
      //the user just logged in / the user was logged in
     dispatch({
        type:'SET_USER',
        user:authUser
     })
    }
    else{
      //the user is logged out
      dispatch({
           type:'SET_USER',
           user:null
    })
  }})

  },[])
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/checkout' element={<Checkout/>} />
          
          <Route path="payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } />
         <Route path="/orders" element ={<Orders/> }/>

          
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
