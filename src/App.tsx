import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='' element={
          <>
          <Pizzas />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span>
          </header>
          </>
          }>
        </Route>
        <Route path='dostavka-ta-oplata' element={
          <>
          <Delivery />
          </>
        }>
        </Route>
        <Route path='blog' element={
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
