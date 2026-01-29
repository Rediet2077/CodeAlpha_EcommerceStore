import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const [likes, setLikes] = useState(0);
  const handleLike = () => setLikes(likes + 1);

  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
        </Link>
      </div>
      <div className="product-info">
        <h3 className="product-name">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <div className="product-price">{product.price.toFixed(2)} Birr</div>
        <div className="product-actions">
          <button
            onClick={handleLike}
            className="btn-like"
          >
            ♥ {likes}
          </button>
          <button
            onClick={() => addToCart(product)}
            className="btn-add-cart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;