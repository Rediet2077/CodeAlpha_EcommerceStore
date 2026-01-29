import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders Mercy Stainless Jewellery store name', () => {
  render(<App />);
  const storeNameElement = screen.getByText(/Mercy Stainless Jewellery/i);
  expect(storeNameElement).toBeInTheDocument();
});