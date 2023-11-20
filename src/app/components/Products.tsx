import React, { useState, useEffect } from 'react';
import { sortBy, sortSelectOptions } from '../utils/utils';
import { Products } from '../types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchData } from '../endpoints/fetchData';
import { NoResults } from './NoResults';
import PlaceholderImage from '../../assets/spinner.gif';

import Select from './Select';
import TextInput from './TextInput';
import Pagination from './Pagination';
import '../index.css';

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [contentTypeValue, setContentTypeValue] = useState<string>('Stories');

  const productsPerPage = 20;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
   const productsByContentType = products.filter((type: Products) => type.contentType.includes(contentTypeValue))  || products;
  const filteredProducts = sortBy?.[filterValue]?.(productsByContentType) ?? productsByContentType;
  
  const productsBySearchValue = filteredProducts.filter((search: Products) => {
    return search.title.toLowerCase().includes(searchValue);
  }) || filteredProducts;
  const currentProducts = productsBySearchValue.slice(firstIndex, lastIndex);
  const pages = Math.ceil(productsBySearchValue.length / productsPerPage);
  const numbers = [...Array(pages + 1).keys()].slice(1);

  useEffect(() => {
    fetchData(setProducts);
    setSearchValue('');
  }, []);

  if(products.length === 0) {
    return <div>loading...</div>
  }

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(curr => curr + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(curr => curr - 1);
    }
  };

  const movePages = (id: number) => {
    setCurrentPage(id);
  };


  //Generate content type list
  const transformContentTypeintoList = [
    ...new Set(products.map((prod) => prod.contentType).flat()),
  ];

  const contentTypeList = transformContentTypeintoList
    .map((item) =>  [
        {
          label: item,
          value: item,
        },
      ])
    .flat();

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event?.target.value);
    //goto page 1 after sort
    setCurrentPage(1);
  };

  const handleTitleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
        setSearchValue(value.toLowerCase());
        setCurrentPage(1)
  };

  const handleContentTypeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setContentTypeValue(value) 
    setCurrentPage(1);
  };

  const mapContentTypes = () => {
    return (
      <Select
        id="contentSelect"
        options={contentTypeList}
        datatestid={'contentTypeId'}
        onChange={handleContentTypeSort}
        defaultOption={'Select Content Type'}
        label={'Filter by Content type '}
      />
    );
  };
 
  const mapProducts = () => {
    if (currentProducts.length === 0) {
      return <NoResults />;
    } else {
      return (
        <React.Fragment>
          <div className="searchContainer">
            <TextInput
              className="searchInput"
              placeholder="search by title"
              value={searchValue}
              datatestid={'searchId'}
              onChange={handleTitleSearch}
            />
          </div>
          <div className="container">
            <div className="filterContainer">
              <div>
                <Pagination
                  numbers={numbers}
                  currentPage={currentPage}
                  prevPage={prevPage}
                  movePages={movePages}
                  nextPage={nextPage}
                />
              </div>
              <div className="filter">
                {mapContentTypes()}
                <Select
                  id="SortSelect"
                  options={sortSelectOptions}
                  datatestid={'sortTestId'}
                  onChange={handleSort}
                  defaultOption={'Sort by'}
                  label={'Sort by '}
                />
              </div>
            </div>
            {currentProducts.map((product: Products) => {
              return (
                <div className="item" key={product.id}>
                  <LazyLoadImage
                    width={100}
                    height={100}
                    placeholderSrc={PlaceholderImage}
                    src={product.imgSet.sm.src}
                    alt=""
                  />
                  <div
                    aria-label={`Product${product.id}`}
                    tabIndex={0}
                    className="innerContainer">
                    <span className="text" tabIndex={0} aria-label={`Name`}>
                      Name: {product.title}
                    </span>
                    <span className="text" tabIndex={0} aria-label={`Price`}>
                      Price: {product.price}
                    </span>
                    <span
                      className="text"
                      tabIndex={0}
                      aria-label={` Stock level`}>
                      Stock level: {product.productType}
                    </span>
                  </div>
                </div>
              );
            })}
            <Pagination
              numbers={numbers}
              currentPage={currentPage}
              prevPage={prevPage}
              movePages={movePages}
              nextPage={nextPage}
            />
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <header className="App-header">
      <div className="container">{mapProducts()}</div>
    </header>
  );
}

export default App;

