import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useProduct } from '../contexts/ProductContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { allProducts } = useProduct(); // Access all products from context

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#fff', margin: '40px auto', maxWidth: '600px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
        <h2 style={{ color: '#dc3545', fontFamily: '"Playfair Display", serif' }}>Product Not Found</h2>
        <p style={{ color: '#555' }}>The jewelry item you are looking for does not exist. Please check the URL or go back to the home page.</p>
        <button onClick={() => window.location.href = '/'}
          style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#a38c64', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease', marginTop: '20px' }}>
          Go to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '40px auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start' }}>
      <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
        <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </div>
      <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
        <h1 style={{ color: '#a38c64', fontFamily: '"Playfair Display", serif', marginBottom: '15px' }}>{product.name}</h1>
        <p style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>{product.price.toFixed(2)}Birr</p>
        <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>{product.description}</p>
        <button
          onClick={handleAddToCart}
          style={{ padding: '15px 30px', fontSize: '1.1em', backgroundColor: '#a38c64', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;