import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import SelectButton from './components/SelectButton';
import SearchBar from './components/SearchBar';


import logoImg from './assets/logo.png';

import api from './services/api';

import './global.css'

//Integração com Axios.

//Falta fazer os filtros, loading e ordenação.

function App() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.get('products').then(({ data }) => setProducts(data));
    console.log(products)
  }, []);

  async function search(e) {
    e.preventDefault();
    const response = await api.get('products/search', { params: { searchParams: searchParams } });
    setProducts(response.data);
    console.log(searchParams, response.data);
  }

  async function filterBy() {
    const response = await api.get('products/filter', { params: { filter: filter } });
    setProducts(response.data);
  }

  async function sortBy() {
    const response = await api.get('products/sortBy', { params: { filter: filter } });
    setProducts(response.data);
  }

  return (
    <div className="home-container">
      <header>
        <div className="logo">
          <img src={logoImg} />
        </div>
        <div className="text-header">
          <h1>Bunny video browser</h1>
          <p>Encontre os melhores videos aqui</p>
        </div>
      </header>

      {/* SeachBar */}
      <SearchBar
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
        onClick={search}
      />

      {/* Select-Box
      <div className="selects">
        <SelectButton />
      </div> */}

      {/* Card  */}
      <div className="container">
        {products.map((product) => {
          return (
            <Card
              key={product._id}
              name={product.name}
              value={product.value}
              rating={product.rating}
              type={product.type}
              thumbnail={product.thumbnail}
            />
          )
        })}

      </div>
    </div>
  );
}
export default App;
