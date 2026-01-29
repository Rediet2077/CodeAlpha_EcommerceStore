import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <main style={{ minHeight: 'calc(100vh - 120px)' }} className="fade-in">
              <Routes>
                <Route path="/" element={<> <Header /> <ProductList /> <Footer /></>} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <CartDrawer />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;