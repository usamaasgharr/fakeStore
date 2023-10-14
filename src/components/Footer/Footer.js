import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <h3 className='primary'>Site Map</h3>
            <ul className="list-unstyled three-column">
              <li><Link to = "/">Home</Link></li>
              <li><Link to = "/shop">Shop</Link></li>
              <li><Link to = "/cart">Cart Items</Link></li>
              <li><Link to = "/about">About</Link></li>
              {/* <li><Link to = "/categories"><a href="">Categories</a></Link></li> */}
            </ul>
            <ul className="list-unstyled socila-list">
              <li><img src="http://placehold.it/48x48" alt="" /></li>
              <li><img src="http://placehold.it/48x48" alt="" /></li>
              <li><img src="http://placehold.it/48x48" alt="" /></li>
              <li><img src="http://placehold.it/48x48" alt="" /></li>
              <li><img src="http://placehold.it/48x48" alt="" /></li>
              <li><img src="http://placehold.it/48x48" alt="" /></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h3 className='primary'>latest Articles</h3>
            <div className="media">
              <a href="#" className="pull-left">
                <img src="http://placehold.it/64x64" alt="" className="media-object" />
              </a>
              <div className="media-body">
                <h4 className="media-heading primary">Programming</h4>
                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

           
          </div>
          

          <div className="col-lg-4">
            <h3 className='primary'>Our Work</h3>
            <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
            <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
            <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
            <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
          </div>

        </div>
      </div>
      <div className="copyright text-center">
        Copyright &copy; 2017 <span>Fake Store</span>
      </div>
    </footer>
  )
}

export default Footer;