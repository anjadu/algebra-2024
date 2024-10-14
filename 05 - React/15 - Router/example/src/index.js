import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navigation from './Components/Navigation';
import Balance from './Components/Balance';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/balance' element={Balance />}/>
      </Routes>
    </BrowserRouter>
);

