import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import Shop from "./Pages/Shop/Shop"
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PageNotFound from './Pages/PageNotFound/PageNotFound'


export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/:category' element={<Shop />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}
