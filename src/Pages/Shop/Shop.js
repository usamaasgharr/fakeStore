import React, { useState, useEffect } from 'react';
import Card from "../../components/Card/Card"
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../Store/Slices/productSlice';
import { useParams } from 'react-router-dom';


export default function ProductsDetails() {

  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  const { category } = useParams();


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="section-products">
      <div className="container" >
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h3 className='font-weight-bold'>Featured Product</h3>
              <h2 className='font-weight-bold text-light'>Popular Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {category ? 
            products.map((product) => (   
              product.category ==category ? <Card product={product} /> : ""
              
            ))
           :
            products.map((product) => (
              
          <Card product={product} />
          
          ))
          }


        </div>
      </div>
    </div>
  );
}