
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './pages/ProductPage'
import ProductDetails from './pages/ProductDetailPage'

function App() {

  return (
      <Routes>
        <Route path='/products' element = {<Product />} />
        <Route path='/products-by-id/:id' element = {<ProductDetails />} />
      </Routes>
  )
}

export default App
