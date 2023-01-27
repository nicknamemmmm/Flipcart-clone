import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Products from './components/Products';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Homepage from './components/Homepage';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
   

   
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path ='/Home'element={<Home/>}/> */}
      <Route path='/registration'element={<Registration/>}/>
      <Route path = '/Login'element={<Login/>}/>
      <Route path = '/products'element={<Products/>}/>
      <Route path = '/cart'element={<Cart/>}/>
      {/* <Route path = '/Header'element={<Header/>}/>  */}
      <Route path = 'Homepage'element={<Homepage/>}/>
      {/* <Route path= 'body'element={<Body/>}/> */}
      {/* <Route path='footer'element={<Footer/>}/> */}
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
