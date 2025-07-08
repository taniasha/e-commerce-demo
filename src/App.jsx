import {React, useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import Aboutus from './Aboutus';
import Details from './Details';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
