import React,{useEffect} from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase"
// import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useStateValue } from "./stateProvider";
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
           
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
