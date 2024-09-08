import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import PricePage from './pages/PricePage';
import ContactUsPage from './pages/ContactUsPage';
import SingleProductPage from './components/SingleProductPage';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: { user: string; comment: string; rating: number }[];
}

const AppContent: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const sampleProduct: Product = {
    id: 1,
    title: 'Sample Product',
    price: 129.99,
    description: 'This is a sample product description for demonstration purposes.',
    image: 'https://via.placeholder.com/600x400',
    rating: 4.5,
    reviews: [
      { user: 'Alice', comment: 'Great product!', rating: 5 },
      { user: 'Bob', comment: 'Good value for money.', rating: 4 }
    ]
  };

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 bg-blue-600 text-white rounded"
      >
        Toggle Dark Mode
      </button>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/pricing' element={<PricePage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/product/:id' element={<SingleProductPage product={sampleProduct} />} />
        </Route>
      </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <DarkModeProvider>
    <AppContent />
  </DarkModeProvider>
);

export default App;
