import React from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';

const Header = () => {
  const Router=useNavigate();
  return (
    <div id='yogesh'>
      <div>
        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'/>
      </div>
      <div>
        <input type='text'placeholder='Search For Here and Brand'/>
      </div>
      <div>
        <button><a href='./login'>Login</a></button>
      </div>
      <div>
        <p>Become a Seller</p>
      </div>
      <div>
        <p>More</p>
      </div>
      <div>
        <button onClick={()=>Router("/Cart")}>cart</button>
      </div>
      
      
    </div>
  )
}

export default Header

