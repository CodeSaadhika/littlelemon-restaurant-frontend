import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Aboutpage from './components/aboutPage';
import Menu from './components/menu';
import OrderOnline from './components/onlineOrder';
import BookingPage from './components/reservations';
import Login from './components/login';

import DATA from './data/data.json';

function App() {
  return (
    <div className='App'>
      <Header header={DATA.global.header} />
      <Routes>
        <Route path='/' element={<Homepage home={DATA.home} dishes={DATA.dishes} /> }/>
        <Route path='/about' element={<Aboutpage /> }/>
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:id' element={<Menu />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/order-online' element={<OrderOnline /> }/>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer footer={DATA.global.footer} />
    </div>
  );
}

export default App;
