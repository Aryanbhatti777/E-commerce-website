import React from 'react'
import './styles/navbar.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Categories from './pages/Categories'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './components/Layout'
import CategoryProducts from "./pages/CategoryProducts";

const App = () => {
  return (
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
      </Route>

      {/* Pages without navbar */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App