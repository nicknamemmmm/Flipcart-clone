import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const route=useNavigate();
  const [userdata,setUserData] = useState();
        console.log(userdata,"aahw");
  useEffect(()=>{
    if(userdata){
      
      const  exitData  = JSON.parse(localStorage.getItem("User"));
      console.log(exitData,"exit Data found")
      if(exitData){
        if(exitData.Email===userdata.Email && exitData.Password===userdata.Password){
          localStorage.setItem("isUserLoggedin","True");

          alert("login succesefull")
        }else{
          alert("wrong credential");
        }
      }else{
        alert("user not found!!")
      }
    }
  },[userdata])




  console.log(userdata,"here data ")
    const handleSubmit=(e)=>{
      e.preventDefault();
      setUserData({
        Email:"pranav@12",
        Password:"mithun12"
      })
       
     
        
    }
  return (
    <div style = {{"marginLeft":"40%"}}>
      <h1>Login Page</h1>
     <form onClick={handleSubmit} >
      <lable>Email</lable><br/>
      <input type='email'/><br/>
      <lable>Password</lable><br/>
      <input type="password"/><br/>
      <input type='submit'/><br/>
    </form>
    <a href='./Registration'>Register first?and then use</a><br/>
    <a href='./Homepage'>Product ? Go Product Page</a>
    </div>
  )
}

export default Login
