import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Routes, Route } from "react-router-dom"
import HomeData from './maincontaint/HomeData';
import CategoryData from './maincontaint/CategoryData'
import ProductsData from './maincontaint/ProductsData'
import AddProduct from './maincontaint/AddProduct';
import AddCategories from './maincontaint/AddCategories'

function App() {
  return (
    <div>
      <Header />
      <div className='flex flex-row'>
        <Sidebar />

        <Routes>
          <Route path='/' element="/" />
          <Route path='category' element={<CategoryData />} />
          <Route path='products' element={<ProductsData />} />
          <Route path='addProduct' element={<AddProduct />} />
          <Route path='addCategories' element={<AddCategories />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
