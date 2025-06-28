import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import SingleProduct from './singleProduct/singleProduct'
import AddToCart from './page/addToCart'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/AddToCart' element={<AddToCart />} />
      </Routes>

    </>
  )
}

export default App

