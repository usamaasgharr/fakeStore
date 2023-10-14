import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../../Store/Slices/cartSlice";



export default function CartItems(product) {

  const dispatch = useDispatch();

  return (
    <div>
      <div div className="row mb-4 d-flex justify-content-between align-items-center" >
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={product.item.image}
            className="img-fluid rounded-3" alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          {/* <h6 className="text-muted"></h6> */}
          <h6 className="text-black mb-0">{product.item.title}</h6>
        </div>

        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0"><b>$ {product.item.price}</b></h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          {/* <a href="#!" className="text-muted"><i className="fas fa-times"></i></a> */}
          <button className='remove btn' onClick={()=>{dispatch(removeItem(product))}}><h4>-</h4></button>
        </div>

      </div >
    </div>

  )
}
