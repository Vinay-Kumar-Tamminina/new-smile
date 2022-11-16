
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import Products from './components/Products'
import ContactUs from './components/ContactUs';
import FarmerLogin from './components/FarmerLogin';
import DealerLogin from './components/DealerLogin';
import FarmerForm from './components/FarmerForm';

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/farmer-login" element={<FarmerLogin/>}></Route>
      <Route path="/dealer-login" element={<DealerLogin/>}></Route>
      <Route path="/farmer-form" element={<FarmerForm/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

