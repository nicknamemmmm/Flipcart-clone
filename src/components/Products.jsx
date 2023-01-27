import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Products = () => {
  const [flipcart,setFlipcart] = useState();
  const router=useNavigate()
  useEffect(()=>{
    async function gettingData(){
        const {data}= await axios.get("https://fakestoreapi.com/products");
    console.log(data,"found the data");
    setFlipcart(data);
    }
    gettingData();
  },[])


  function addToCart(e){
    console.log(e,"data foound here")
    var cartproducmadheshokr = []
    cartproducmadheshokr= JSON.parse(localStorage.getItem("cartpromadhe")) || [];
    cartproducmadheshokr.push(e)
    localStorage.setItem("cartpromadhe",JSON.stringify(cartproducmadheshokr))
    alert("product added to cart")

  }

  return (
    
    <div>
      <Header/>
      <h1>All Product Here</h1>
      {/* <button onClick={()=>router("/Cart")}>Cart Page</button> */}
      <div style={{"display":"flex"}}>
        <div  style={{"border":"1px solid red","width":"20%","height":"px"}}>Filter</div>
        <div style={{"border":"1px solid red","width":"80%","height":"px",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        
        {flipcart && flipcart.map((e,i)=>(
        <div key={i} id='topdiv'>
            
            <div  id='body'>
             <div>
              <img src={e.image}/>
              <h4>{e.id}</h4>
              <h5>{e.title}</h5>
              <h6>{e.price}</h6>
              <button onClick={()=>addToCart(e)}>Buy Now</button>
             </div>
            
           </div> 
        </div>
      ))}
        
        
        </div>
      </div>
    </div>
      
  )
}

export default Products
