import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';
import './Categories.css';

function Categories() {
  const { setSelectedCategory } = useProduct();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate('/');
  };

  const categories = [
    { name: 'Rings', icon: '💍' },
    { name: 'Necklaces', icon: '📿' },
    { name: 'Bracelets', icon: '💫' },
    { name: 'Earrings', icon: '✨' },
    { name: 'Pendants', icon: '💎' },
  ];

  return (
    <div className="categories-container">
      <h2 className="categories-title">Browse by Category</h2>
      <p className="categories-subtitle">
        Explore our exquisite collection curated just for you.
      </p>
      <ul className="categories-list">
        {categories.map((cat) => (
          <li
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            className="category-card"
          >
            <div className="category-icon">{cat.icon}</div>
            <h3 className="category-name">{cat.name}</h3>
          </li>
        ))}
      </ul>
      <div className="view-all-container">
        <button
          onClick={() => handleCategoryClick('All')}
          className="view-all-btn"
        >
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Categories;
