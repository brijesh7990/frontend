import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import PricePage from './pages/PricePage'
import ContactUsPage from './pages/ContactUsPage'
import SingleProductPage from './components/SingleProductPage'
function App() {
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
    <>
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

    </>
  )
}

export default App
