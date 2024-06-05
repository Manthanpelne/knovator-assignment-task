import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ProductListingPage from "./components/productPage";
import CartPage from './components/cartPage';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Product added to cart")
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListingPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} updateCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;