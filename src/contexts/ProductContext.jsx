import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProduct = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => {
            images[item] = r(item);
        });
        return images;
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const imageContext = require.context('../img', false, /\.(png|jpe?g|gif|svg|webp)$/);
                const imageUrls = importAll(imageContext);

                const dummyProducts = [
                    { id: '1', name: 'Diamond Solitaire Ring', price: 1200.00, category: 'Rings', description: 'A stunning diamond solitaire ring set in 18k white gold. Perfect for engagements or special occasions.', imageUrl: imageUrls['./i10.jpg'] },
                    { id: '2', name: 'Emerald Cut Necklace', price: 750.50, category: 'Necklaces', description: 'An elegant emerald cut necklace that adds a touch of sophistication to any outfit.', imageUrl: imageUrls['./i11=2000birr.jpg'] },
                    { id: '3', name: 'Sterling Silver Bracelet', price: 2000.00, category: 'Bracelets', description: 'Handcrafted sterling silver bracelet with intricate detailing.', imageUrl: imageUrls['./i12=2000birr.jpg'] },
                    { id: '4', name: 'Pearl Necklace', price: 2000.00, category: 'Necklaces', description: 'Classic pearl necklace, a timeless piece for your collection.', imageUrl: imageUrls['./i3=200birr.jpg'] },
                    { id: '5', name: 'Gold Solitaire Ring', price: 1200.00, category: 'Rings', description: 'Beautiful gold solitaire ring, simple yet elegant.', imageUrl: imageUrls['./i18.jpg'] },
                    { id: '6', name: 'Ruby Necklace', price: 750.50, category: 'Necklaces', description: 'Radiant ruby necklace set in gold.', imageUrl: imageUrls['./i19.jpg'] },
                    { id: '7', name: 'Charm Bracelet', price: 2000.00, category: 'Bracelets', description: 'Playful charm bracelet with various silver charms.', imageUrl: imageUrls['./i20.jpg'] },
                    { id: '8', name: 'Sapphire Necklace', price: 2000.00, category: 'Necklaces', description: 'Deep blue sapphire necklace, creating a mesmerizing look.', imageUrl: imageUrls['./i21.jpg'] },
                    { id: '9', name: 'Vintage Ring', price: 2000.00, category: 'Rings', description: 'Vintage style ring with unique craftsmanship.', imageUrl: imageUrls['./i6=2000birr.jpg'] },
                    { id: '10', name: 'Crystal Necklace', price: 750.50, category: 'Necklaces', description: 'Shimmering crystal necklace perfect for evening wear.', imageUrl: imageUrls['./i11=2000birr.jpg'] },
                    { id: '11', name: 'Chain Bracelet', price: 2000.00, category: 'Bracelets', description: 'Bold chain bracelet statement piece.', imageUrl: imageUrls['./i12=2000birr.jpg'] },
                    { id: '12', name: 'Choker Necklace', price: 2000.00, category: 'Necklaces', description: 'Trendy choker necklace that fits perfectly.', imageUrl: imageUrls['./i3=200birr.jpg'] },
                    { id: '13', name: 'Engagement Ring', price: 1200.00, category: 'Rings', description: 'Classic engagement ring design.', imageUrl: imageUrls['./i18.jpg'] },
                    { id: '14', name: 'Pendant Necklace', price: 750.50, category: 'Necklaces', description: 'Simple pendant necklace for everyday wear.', imageUrl: imageUrls['./i19.jpg'] },
                    { id: '15', name: 'Cuff Bracelet', price: 2000.00, category: 'Bracelets', description: 'Modern cuff bracelet design.', imageUrl: imageUrls['./i20.jpg'] },
                    { id: '16', name: 'Layered Necklace', price: 2000.00, category: 'Necklaces', description: 'Stylish layered necklace.', imageUrl: imageUrls['./i21.jpg'] },
                    { id: '17', name: 'Diamond Ring', price: 1200.00, category: 'Rings', description: 'Exquisite diamond ring with brilliant sparkle.', imageUrl: imageUrls['./i25.jpg'] },
                    { id: '18', name: 'Gold Necklace', price: 750.50, category: 'Necklaces', description: 'Pure gold necklace.', imageUrl: imageUrls['./i26.jpg'] },
                    { id: '19', name: 'Silver Bracelet', price: 2000.00, category: 'Bracelets', description: 'Polished silver bracelet.', imageUrl: imageUrls['./i27.jpg'] },
                    { id: '20', name: 'Beaded Necklace', price: 2000.00, category: 'Necklaces', description: 'Colorful beaded necklace.', imageUrl: imageUrls['./i28.jpg'] },
                    { id: '21', name: 'Promise Ring', price: 1200.00, category: 'Rings', description: 'A ring to symbolize your promise.', imageUrl: imageUrls['./i29.jpg'] },
                    { id: '22', name: 'Locket Necklace', price: 750.50, category: 'Necklaces', description: 'Keepsake locket necklace.', imageUrl: imageUrls['./i30.jpg'] },
                    { id: '23', name: 'Bangle Bracelet', price: 2000.00, category: 'Bracelets', description: 'Set of bangle bracelets.', imageUrl: imageUrls['./i31.jpg'] },
                    { id: '24', name: 'Statement Necklace', price: 2000.00, category: 'Necklaces', description: 'Bold statement necklace to turn heads.', imageUrl: imageUrls['./i32.jpg'] },
                    { id: '25', name: 'Gemstone Necklace', price: 2000.00, category: 'Necklaces', description: 'Necklace featuring precious gemstones.', imageUrl: imageUrls['./i33.jpg'] },
                    { id: '26', name: 'Pearl Necklace', price: 2000.00, category: 'Necklaces', description: 'Elegant strand of pearls.', imageUrl: imageUrls['./i34.jpg'] },
                    { id: '27', name: 'Diamond Necklace', price: 2000.00, category: 'Necklaces', description: 'Luxurious diamond necklace.', imageUrl: imageUrls['./i35.jpg'] },
                    { id: '28', name: 'Silver Necklace', price: 2000.00, category: 'Necklaces', description: 'Sterling silver chain necklace.', imageUrl: imageUrls['./i36.jpg'] },
                    { id: '29', name: 'Gold Chain', price: 2000.00, category: 'Necklaces', description: 'Classic gold chain.', imageUrl: imageUrls['./i37.jpg'] },
                    { id: '30', name: 'Rose Gold Necklace', price: 2000.00, category: 'Necklaces', description: 'Trendy rose gold necklace.', imageUrl: imageUrls['./i38.jpg'] },
                    { id: '31', name: 'Initial Necklace', price: 2000.00, category: 'Necklaces', description: 'Personalized initial necklace.', imageUrl: imageUrls['./i39.jpg'] },
                    { id: '32', name: 'Cross Necklace', price: 2000.00, category: 'Necklaces', description: 'Symbolic cross necklace.', imageUrl: imageUrls['./i40.jpg'] },
                ];

                await new Promise(resolve => setTimeout(resolve, 800));
                setProducts(dummyProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error loading products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const value = {
        products: filteredProducts,
        allProducts: products, // Optional if needed
        loading,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
