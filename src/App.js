
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Explore from './components/Explore';
import NonVeg from './components/NonVeg';
import Soups from './components/Soup';
import Veg from './components/Veg';
import SeaFood from './components/SeaFood';
import Salads from './components/Salads';
import Noodles from './components/Noodles';
import MainCourse from './components/MainCourse';
import Desserts from './components/Desserts';
import Cart from './components/Cart';
import OrderDetails from './components/Checkout';

function App() {
  return (
    <HashRouter>
    {/* <Router> */}
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Non-starters" element={<NonVeg />} />
        <Route path="/veg-starters" element={<Veg/>} />
        <Route path="/soup-starters" element={<Soups />} />
        <Route path="/sea-starters" element={<SeaFood />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/noodles-starters" element={<Noodles/>} />
        <Route path="/main-starters" element={<MainCourse/>} />
        <Route path="/desserts-starters" element={<Desserts/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-details" element={<OrderDetails />} />
        
       
        
        
      </Routes>
    {/* </Router> */}
    </HashRouter>
  );
}

export default App;





