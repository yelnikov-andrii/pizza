import React from 'react';
import { Header } from './Components/Header/Header';
import './App.scss';
import { Pizzas } from './Components/Pizzas/Pizzas';
import { Routes, Route } from 'react-router-dom';
import { Delivery } from './Components/Delivery/Delivery';
import { Blog } from './Components/Blog/Blog';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { Footer } from './Components/Footer/Footer';
import { Discounts } from './Components/Discounts/Discounts';
import { Places } from './Components/Places/Places';
import { Vacancies } from './Components/Vacancies/Vacancies';
import { Contacts } from './Components/Contacts/Contacts';
import { Cart } from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/*' element={
          <>
          <Pizzas />
          </>
          }>
        </Route>
        <Route path='dostavka-ta-oplata' element={
          <>
          <Delivery />
          </>
        }>
        </Route>
        <Route path='blog/*' element={
          <>
          <Blog />
          </>
        }>
        </Route>
        <Route path='pro-kompaniyou' element={
          <>
          <AboutUs />
          </>
        }>
        </Route>
        <Route path='akciyyi' element={
          <>
          <Discounts />
          </>
        }>
        </Route>
        <Route path='nashi-zaklady' element={
          <>
          <Places />
          </>
        }>
        </Route>
        <Route path='vakansiyyi' element={
          <>
          <Vacancies />
          </>
        }>
        </Route>
        <Route path='kontakty' element={
          <>
          <Contacts />
          </>
        }>
        </Route>
        <Route path='cart' element={
          <>
          <Cart />
          </>
        }>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
