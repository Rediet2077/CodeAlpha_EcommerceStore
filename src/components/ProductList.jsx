import React from 'react';
import ProductCard from './ProductCard';
import { useProduct } from '../contexts/ProductContext';
import './ProductList.css';

function ProductList() {
  const { products, loading } = useProduct();

  if (loading) {
    return <div className="loading-text">Loading beautiful jewelry...</div>;
  }

  return (
    <div className="product-list-container">
      <h2 className="section-title">Our Latest Collection</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={product.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProductCard product={product} />
          </div>
        ))}
        {products.length === 0 && (
          <div className="no-products">
            <p>No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;