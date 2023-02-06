import React from 'react';


import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from
 "react-router-dom";
import './App.css';
import Home from "./components/Pages/Home";
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';
import Products from './components/Pages/Products';
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
<Routes>
  
  <Route path="/" element={<Home/>} />
<Route path="/services" element={<Services/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/sign-up" element={<SignUp/>}/>

</Routes>
<Footer/>
    </Router>
   
    </>
  );
}

export default App;
