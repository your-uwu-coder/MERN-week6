import React, { useState } from 'react'; 
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import OneProduct from './components/OneProduct';
import Edit from './components/Edit';
import Nav from './components/Nav';

function App() {
  const [allProducts, setAllProducts] = useState([])

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<><ProductForm allProducts={allProducts} setAllProducts={setAllProducts} /><ProductList allProducts={allProducts} setAllProducts={setAllProducts} /></>}/>
        <Route path='/oneProduct/:id' element={<OneProduct/>}/>
        <Route path='/updateProduct/:id' element={<Edit/>}/>
      </Routes>

    </div>
  );
}

export default App;
