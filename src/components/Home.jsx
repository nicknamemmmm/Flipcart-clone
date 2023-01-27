import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body  from  './Body'
// import{userContext} from './react'
//import userContext from './userContext'
const Home = () => {
    // const user= userContext(userContext);
    // console.log(user)
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Home
