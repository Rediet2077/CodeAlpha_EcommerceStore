
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item] = r(item);
  });
  return images;
};

const imageContext = require.context('../img', false, /\.(png|jpe?g|gif|svg|webp)$/);
const imageUrls = importAll(imageContext);


export const productsData = [
  { id: '1', name: 'Diamond Solitaire Ring', price: 1200.00, imageUrl: imageUrls['./i10.jpg'] || 'https://via.placeholder.com/1260x750?text=Ring' },
  { id: '2', name: 'Emerald Cut Necklace', price: 750.50, imageUrl: imageUrls['./i11=2000birr.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '3', name: 'Sterling Silver Bracelet', price: 2000.00, imageUrl: imageUrls['./i12=2000birr.jpg'] || 'https://via.placeholder.com/1260x750?text=Bracelet' },
  { id: '4', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i3=200birr.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '5', name: 'Diamond Solitaire Ring', price: 1200.00, imageUrl: imageUrls['./i18.jpg'] || 'https://via.placeholder.com/1260x750?text=Ring' },
  { id: '6', name: 'Emerald Cut Necklace', price: 750.50, imageUrl: imageUrls['./i19.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '7', name: 'Sterling Silver Bracelet', price: 2000.00, imageUrl: imageUrls['./i20.jpg'] || 'https://via.placeholder.com/1260x750?text=Bracelet' },
  { id: '8', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i21.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '9', name: 'Solitaire Ring', price: 2000.00, imageUrl: imageUrls['./i6=2000birr.jpg'] || 'https://via.placeholder.com/1260x750?text=Ring' },
  { id: '10', name: 'Emerald Cut Necklace', price: 750.50, imageUrl: imageUrls['./i11=2000birr.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '11', name: 'Sterling Silver Bracelet', price: 2000.00, imageUrl: imageUrls['./i12=2000birr.jpg'] || 'https://via.placeholder.com/1260x750?text=Bracelet' },
  { id: '12', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i3=200birr.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '13', name: 'Diamond Solitaire Ring', price: 1200.00, imageUrl: imageUrls['./i18.jpg'] || 'https://via.placeholder.com/1260x750?text=Ring' },
  { id: '14', name: 'Emerald Cut Necklace', price: 750.50, imageUrl: imageUrls['./i19.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '15', name: 'Sterling Silver Bracelet', price: 2000.00, imageUrl: imageUrls['./i20.jpg'] || 'https://via.placeholder.com/1260x750?text=Bracelet' },
  { id: '16', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i21.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '17', name: 'Diamond Solitaire Ring', price: 1200.00, imageUrl: imageUrls['./i25.jpg'] || 'https://via.placeholder.com/1260x750?text=Ring' },
  { id: '18', name: 'Emerald Cut Necklace', price: 750.50, imageUrl: imageUrls['./i26.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '19', name: 'Sterling Silver Bracelet', price: 2000.00, imageUrl: imageUrls['./i27.jpg'] || 'https://via.placeholder.com/1260x750?text=Bracelet' },
  { id: '20', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i28.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '21', name: 'Diamond Solitaire Ring', price: 1200.00, imageUrl: imageUrls['./i29.jpg'] || 'https://via.placeholder.com/1260x750?text=Ring' },
  { id: '22', name: 'Emerald Cut Necklace', price: 750.50, imageUrl: imageUrls['./i30.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '23', name: 'Sterling Silver Bracelet', price: 2000.00, imageUrl: imageUrls['./i31.jpg'] || 'https://via.placeholder.com/1260x750?text=Bracelet' },
  { id: '24', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i32.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '25', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i33.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '26', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i34.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '27', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i35.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '28', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i36.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '29', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i37.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '30', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i38.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '31', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i39.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
  { id: '32', name: 'Necklace', price: 2000.00, imageUrl: imageUrls['./i40.jpg'] || 'https://via.placeholder.com/1260x750?text=Necklace' },
];