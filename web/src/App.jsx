import React, { useState, useEffect } from 'react';
import logoImg from './assets/logo.png';
import Card from './components/Card';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';

import Loader from 'react-loader-spinner';

import api from './services/api';

import './global.css'

function App() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const [filter, setFilter] = useState('');
  const [found, setFound] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  async function search(e) {
    e.preventDefault();
    setIsLoading(true);
    setFound(true);
    await api.get('products/search', { params: { searchParams: searchParams } }).then(({ data }) => {
      if (data.length === 0) setFound(false);
      setProducts(data);
      setIsLoading(false)
    });
  }

  async function filterBy(e) {
    e.preventDefault();
    setIsLoading(true);
    setFound(true);
    await api.get('products/filter', { params: { filter: filter } }).then(({ data }) => {
      console.log(filter)
      if (data.length === 0) setFound(false);
      setProducts(data);
      setIsLoading(false);
    });
  }

  async function sortBy(e) {
    e.preventDefault();
    setIsLoading(true);
    setFound(true);
    await api.get('products/sortBy', { params: { filter: filter } }).then(({ data }) => {
      console.log(filter)
      if (data.length === 0) setFound(false);
      setProducts(data);
      setIsLoading(false);
    });
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


      {/* Select-Box */}
      <div className="selects">
        <Filter
          label="Filtar por"
          name="filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
          onClick={filterBy}
          options={[
            { value: 'image', label: 'Imagem' },
            { value: 'audio', label: 'Audio' },
            { value: 'video', label: 'Video' }
          ]}
        />
        <Filter
          label="Ordenar por"
          name="sort"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
          onClick={sortBy}
          options={[
            { value: 'last', label: 'Mais recentes' },
            { value: 'older', label: 'Mais Antigo' },
            { value: 'expensive', label: 'Mais Caro' },
            { value: 'cheaper', label: 'Mais Barato' },
            { value: 'rating', label: 'Avaliações' },
          ]}
        />
      </div>


      {/* Card  */}
      {
        isLoading ? (
          <div className="loader">
            <Loader
              type='ThreeDots'
              color="#CA1240"
              height={100}
              width={100}
              timeout={4000}
            />
          </div>
        ) : (
          <div>
            {
              !found ? (
                <div className="not-found">
                  <h2>Não encontramos nenhum item da sua busca.</h2>
                  <p>Tente novamente mais tarde!</p>
                </div>

              ) : (
                <div className="container" >
                  {
                    products.map((product) => {
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
                    })
                  }
                </div>
              )
            }
          </div>
        )
      }

    </div>
  );
}
export default App;
