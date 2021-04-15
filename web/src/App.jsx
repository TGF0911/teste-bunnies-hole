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
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   api.get('/products').then(({ data }) => setProducts(data));
  // }, [])

  //Metodo de pesquisa.
  // function searchProducts() {
  //   const results = api.get('/search', { params: { searchParams: searchParams } });

  //   //Colocar um if para caso não encontrar nenhum produto com esse nome.
  //   if (!results) {
  //     return (
  //       <div className="not-found">
  //         <h1>Não encontramos nenhum produto com este nome. :(</h1>
  //         <p>Que tal tentar novamente?</p>
  //       </div>
  //     )
  //   }

  // }

  // //Metodo de filtragem.
  // function productsFilter() {
  //   api.get('products/filter', { params: { type: type } });
  // }

  // //Metodo de ordenação.
  // function sortProducts() {
  //   api.get('sortProdcuts', { params: { selected: selected } });
  // }

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


      <div className="container">

        <SearchBar />

        <SelectButton />
      <ul>
        <li><Card/></li>
        <li><Card/></li>
        <li><Card/></li>
      </ul>

        {/* <ul>
          {products.map((product) => {
            <li>
              <Card
                key={product._id}
                type={product.type}
                name={product.name}
                rating={product.rating}
                thumbnail={product.thumbnail}
              />
            </li>
          })}
        </ul> */}


      </div>
    </div>
  );
}
export default App;
