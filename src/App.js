import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ProductDetails from './Pages/ProductPage/ProductDetails';
import HomeProducts from './Pages/HomeProduct/HomeProducts';
import { useState } from 'react'
import { AppContext } from './AppContext'
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';
import CartPage from './Pages/Cartpage/CartPage';
import SearchPage from './Pages/Search/SearchPage';

function App() {

  const [cartItems, setCartItems] = useState([])

  const changeCartValue = (newData) => {
    setCartItems(newData)
  }

  console.log(cartItems, 'cart item');
  return (
    <div className="App">
      <NavBar />
      <AppContext.Provider value={{ cartItems }} >
        <Routes>
          <Route path='/' element={<HomeProducts />} />
          <Route path='/product-details' element={<ProductDetails onClick={changeCartValue} />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AppContext.Provider>
    </div >
  );
}

export default App;
