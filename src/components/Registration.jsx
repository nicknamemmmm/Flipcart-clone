import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const [email,setEmail] = useState();
 console.log(setEmail,"this field here")

    useEffect(()=>{
      if(email){
        const storeDataInLocal = JSON.stringify(email);
      localStorage.setItem("User",storeDataInLocal);
      }
      
    })


  function okSubmited(){
    setEmail({
      name:"pranav",
      Email:"pranav@12",
      Password:"mithun12"
    })
    alert("succesful");
    console.log(setEmail,"seted allfield")
  }
  
  return (
    <div style={{"marginLeft":"40%"}}>
      <h1>Registration Page</h1>
      <form onClick={okSubmited}>
        <lable>Name</lable><br/>
        <input type="text"/><br/>
        <lable>Email</lable><br/>
        <input type="Email"/><br/>
        <lable>Password</lable><br/>
        <input type="password"/><br/>
        <input type="submit"/><br/>
      </form>

      <a href='./login'>User Alredy login?</a>
      
    </div>
  )
}

export default Registration
