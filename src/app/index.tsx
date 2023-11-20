import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import './index.css';

function App() {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route index path="/products" Component={Products} />
      
    </Routes>
  );
}

export default App;
