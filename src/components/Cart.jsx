
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Header from './Header';

const Cart = () => {
   const [cartProduct,setCartProduct] = useState();
   console.log(cartProduct,"is fuully loaded")
   useEffect(()=>{
     const rathod=JSON.parse(localStorage.getItem("cartpromadhe"))
     console.log(rathod,"is hereee")
     if(rathod){
        setCartProduct(rathod);
     }else{
        alert("erroor");
     }
   },[])

  return (
    <div>
        <Header/>
      <h1>cart PAGE HERE</h1>
      {cartProduct && cartProduct.map((e,i)=>(
        <div key={i}>
            <img src={e.image}/>
            <h4>{e.title}</h4>
            <h4>{e.id}</h4>

        </div>
      ))}
      
    </div>
  )
}

export default Cart
