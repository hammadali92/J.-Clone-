import 'react-toastify/dist/ReactToastify.css';

import React from 'react';


import { Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import FrontPage from "./pages/FrontPage";
import MainPage from "./pages/MainPage";
import NewArrival from "./pages/NewArrival";
import OnlineEdition from "./pages/OnlineEdition";
import Table from './components/Table';
// import CastCrew from "./pages/CastCrew"
import Women from "./pages/Women"
import Men from "./pages/Men"
import BoysGirls from "./pages/BoysGirls"
import Register from './pages/Register';
import Login from './pages/Login';
// import Products from './components/Products';
import ProductsPage from "./pages/ProductsPage"
import ProductDetail from './pages/ProductDetail';
// import Cart from './components/Cart';
import Dashboard from './pages/Dashboard';
import ProductsDashboard from './pages/ProductsDashbaord';
import UpdateProduct from './components/UpdateProduct';
import CartPage from './pages/CartPage';


function App() {
 
  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>}/>
      <Route path="/FrontPage" element={<FrontPage/>}/>
      <Route path="/MainPage" element={<MainPage/>}/>
      <Route path="/NewArrival" element={<NewArrival/>}/>
      <Route path="/OnlineEdition" element={<OnlineEdition/>}/>
      <Route path="/Men" element={<Men/>}/>
      <Route path="/Women" element={<Women/>}/>
      {/* <Route path="/Products/CAST & CREW" element={<ProductsPage/>}/> */}
      <Route path="/BoysGirls" element={<BoysGirls/>}/>
      <Route path="/RegisterPage" element={<Register/>}/>
     
      <Route path="/Products/:category" element={<ProductsPage/>}/>
      <Route path="/Products/:category/:id" element={<ProductDetail/>}/> 
    <Route path="/CartPage" element={<CartPage/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/ProductsDashboard/:category" element={<ProductsDashboard/>}/>
      <Route path="/Table" element={<Table/>}/>
      <Route path="/UpdateProduct/:id" element={<UpdateProduct/>}/>
    </Routes>
    <ToastContainer />
  </>
 
  );
}

export default App;

