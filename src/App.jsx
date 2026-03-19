import React from 'react'
import './styles/navbar.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/FeaturedProducts'
import Cart from './pages/Cart'
import Categories from './pages/Categories'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Layout from './components/Layout'
import CategoryProducts from "./pages/CategoryProducts";
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Bestseller from './pages/Bestseller'
import ScrollToTop from './components/Scrolltotop'

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      {/* Pages with navbar */}
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='categories' element={<Categories />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/bestseller' element={<Bestseller/>}/>
      </Route>

      {/* Pages without navbar */}
      <Route path='/login' element={<Login />} />

      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
    </>
  )
}

export default App