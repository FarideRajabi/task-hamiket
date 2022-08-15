import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Add from './components/Add';
import Prodact from './components/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Prodact />} />
      <Route path="add" element={<Add/> } />
    </Routes>
  </BrowserRouter>,
);

