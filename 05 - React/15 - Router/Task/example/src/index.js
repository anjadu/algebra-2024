import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Nav from './Components/Nav';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/first' element={<First />} />
      <Route path='/second' element={<Second />} />
      <Route path='/third' element={<Third />} />
          
    </Routes>
  </BrowserRouter>
);