import {BrowserRouter as Router , Routes,Route,} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Exchanges from './Components/Exchanges';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useContext, useEffect } from 'react';
import {serverr} from "./index"
import axios from 'axios';
import { Context } from './index';
import { Toaster } from "react-hot-toast";
import About from './Components/About';
import Explore from './Components/Explore';
import Explore2 from './Components/Explore2';

function App (){
  const {setUserr,isAuthenticated,setIsAuthenticated} = useContext(Context);

  useEffect(()=>{
    getData();
   },[]);
  function getData (){
    const getDataa= axios.get("http://localhost:5000/users/me",{
      
  }).then((res)=>{
    setUserr(res.data.user)
    console.log(`data is ${res.data}`)
    
    setIsAuthenticated(true)
  }).catch((error)=>{
    setUserr({})
    setIsAuthenticated(false)
    console.log("kya bhai")

  })
  }
return(
  <Router>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore2' element={<Explore2/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/blogs' element={<Exchanges/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/explore' element={<Explore/>}/>
    </Routes>
    <Footer/>
    <Toaster/>
  </Router>
);
}
export default App;