import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartDrawer.css';

function CartDrawer() {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}></div>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="drawer-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-btn" onClick={closeCart}>&times;</button>
                </div>

                <div className="drawer-content">
                    {cartItems.length === 0 ? (
                        <div className="drawer-empty">
                            <p>Your cart is empty.</p>
                            <button onClick={closeCart} style={{ marginTop: '20px', background: 'none', border: '1px solid #ccc', padding: '10px 20px', cursor: 'pointer' }}>
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="drawer-item">
                                <img src={item.imageUrl} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="item-price">${item.price.toFixed(2)}</p>
                                    <div className="item-controls">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="drawer-footer">
                        <div className="total-row">
                            <span>Total:</span>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" className="checkout-btn" onClick={closeCart}>
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default CartDrawer;
