import React from 'react'
import "./Home.css"
import Product from './Product'
import image from "./images/lean-startup.png"
import kenwood from "./images/kenwood.jpg"
import charcoal from "./images/charcoal.jpg"
import amazonprime from "./images/amazon-prime.jpg"
import samsung from "./images/samsung.webp"
import watch from "./images/watch.jpg"
import ipad from "./images/ipad.jpg"
const Home = () => {
  return (
    
    <div className="home">
    <div className="home_container">

    <img className='home_image' src={amazonprime} alt="" />
    <div className="home_row">
  <Product title='The lean startup' price={29.99} img={image} rating={5}/>
  <Product title='Kenwood kMix Stand Mixer for Baking,
  Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
  price={239.0} rating={4} img={kenwood}/>
    </div>
    <div className="home_row">
    <Product title="Amazon Echo (3rd Generation) | Smartspeaker with Alexa, charcoal Fabric" price={98.99} rating={5} img={charcoal}/>
    <Product title="New apple ipad Pro (12.9-inch, wifi, 128GB) - Silver (4th Generation)" price={598.99} rating={4} img={ipad}/>
    <Product title="Samsung LC49RG90SS4UXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} img={samsung}/>
    </div>
    <div className="home_row">
<Product title="Samsung LC49RG90SS4UXEN 49' Best quality LED Watch" price={199.99} rating={3} img={watch}/>
    </div>
    </div>
    </div>
    
  )
}

export default Home