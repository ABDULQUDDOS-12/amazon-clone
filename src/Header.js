import React from 'react'
import './Header.css'
import image from "./images/amazon-dark.svg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './stateProvider';
import {auth} from './firebase'
function Header() {
  const [{basket,user}] = useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
      <img style={{width:"70px",objectFit:'contain',margin:"0 20px",height:"100%"}} src={image} alt="amazon" />
      </Link>
    <div className="header_search">
        <input type="text" placeholder="Search" className='header_searchInput'/>
    <SearchIcon className="header_searchIcon"/>
    </div>
    <div className="header_nav">
            
        </div>
        <Link to ={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
            <span className='Header_optionLineOne'>Hello Guest</span>
            <span className='Header_optionLinetwo'>{user?'Sign Out':'Sign in'}</span>
            </div>
            </Link>
            <div className="header_option">
            <span className='Header_optionLineOne'>Returns</span>
            <span className='Header_optionLinetwo'>& Orders</span>
            </div>
            <div className="header_option">
            <span className='Header_optionLineOne'>Your</span>
            <span className='Header_optionLinetwo' >Prime</span>
            </div>
            <Link to="/checkout">
            <div className="header_optionBasket">
            <ShoppingBasketIcon/>  
            <span className="header_basketCount">{basket?.length}</span>          
            </div>
            </Link>
    </div>
  )
}

export default Header
