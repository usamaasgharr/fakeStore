import React from 'react'
import "./Card.css"
import { useDispatch } from 'react-redux'
import { addItem } from "../../Store/Slices/cartSlice";





export default function Card(product) {

  const dispatch = useDispatch();


  return (

    <div className="col-md-6 col-lg-4 col-xl-3 " key={product.product.id}>
      <div className="single-product text-light ]" >
        <img id='product-1' src={product.product.image} alt="" className='w-100 product-image' />
        <div className="part-2">
          <h3 className="product-title">{product.product.title}</h3>
          <h4 className="product-price">{product.product.price}$</h4><br />

          <p>{product.product.description}</p>

          <button className="btn btn-primary" onClick= {()=>{dispatch(addItem(product.product))}}>Add to Cart</button>
        </div>
      </div>
    </div>

  )
}