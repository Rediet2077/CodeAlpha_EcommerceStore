import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    const { cartItems: cart, getCartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        console.log('Order placed:', { cart, formData });
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {
        return (
            <div className="checkout-success">
                <h2>Thank you for your order!</h2>
                <p>Your order has been placed successfully.</p>
                <Link to="/" className="continue-shopping">Continue Shopping</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart-checkout">
                <h2>Your cart is empty</h2>
                <Link to="/">Go back manually to shop</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-content">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <h3>Shipping Information</h3>
                    <div className="form-group">
                        <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
                        <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
                    </div>
                    <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                    <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
                    <div className="form-group">
                        <input type="text" name="city" placeholder="City" required onChange={handleChange} />
                        <input type="text" name="zip" placeholder="ZIP Code" required onChange={handleChange} />
                    </div>

                    <h3>Payment Details</h3>
                    <input type="text" name="cardNumber" placeholder="Card Number" required onChange={handleChange} />
                    <div className="form-group">
                        <input type="text" name="expiry" placeholder="MM/YY" required onChange={handleChange} />
                        <input type="text" name="cvv" placeholder="CVV" required onChange={handleChange} />
                    </div>

                    <button type="submit" className="place-order-btn">Place Order</button>
                </form>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    {cart.map(item => (
                        <div key={item.id} className="summary-item">
                            <span>{item.name} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="summary-total">
                        <strong>Total:</strong>
                        <strong>${getCartTotal().toFixed(2)}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
