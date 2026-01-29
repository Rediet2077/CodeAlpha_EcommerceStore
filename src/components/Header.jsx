import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useProduct } from '../contexts/ProductContext';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

function Header() {
  const { getCartItemCount, openCart } = useCart();
  const { searchTerm, setSearchTerm } = useProduct();
  const { user } = useAuth();

  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link to="/" className="store-name">
            Mercy Stainless Jewellery
          </Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <button onClick={openCart} className="nav-cart-btn">
                Cart ({getCartItemCount()})
              </button>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {user ? (
            <Link to="/profile" className="login-link">Profile</Link>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
        </div>
      </header>
      <div className='advert'>
        <div className="hero-content">
          <h1>Welcome to Mercy Online Jewelry Shopping</h1>
          <p>Discover elegance and style in every piece.</p>
          <button onClick={openCart} className="hero-btn">Shop Now</button>
        </div>
      </div>
    </>
  );
}

export default Header;