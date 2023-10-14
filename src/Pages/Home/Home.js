import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import image_1 from "../../images/home 1.jpg"
import image_2 from "../../images/home 2.jpg"
import { useState } from 'react'
import { useEffect } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux';
import productSlice, { fetchProducts } from '../../Store/Slices/productSlice';
import Card from '../../components/Card/Card';

export default function Home() {

    const [scrolled, isScrolled] = useState(false);

    useEffect(() => {
        const scrolled = () => {
            if (window.scrollY > 56) {
                isScrolled(true);
            }
            else {
                isScrolled(false);
            }
        };
        window.addEventListener('scroll', scrolled);

        return () => {
            window.removeEventListener('scroll', scrolled)
        }
    }, []);


    const products = useSelector((state) => state.products.data);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    // taking 4 products from all products  
    const product_slice = products.slice(0, 4);


    return (
        <div className="container">
            <div className={scrolled ? 'home-content content' : 'content'}>
                <div>
                    <img src={image_1} className="d-block img" alt="Image Description" />
                </div>

                <div className='text-light text'>
                    <p className='para'><span className="primary">new</span> collections</p>
                    <h1 className='heading'>Meet <span className='primary'>new <br /> fashion</span> week</h1>
                </div>
            </div>



            <div className='content'>
                <div>
                    <img src={image_2} className="d-block img-2" alt="Image Description" />
                </div>

                <div className='text-light text-2'>
                    <p className='para'><span className="primary">Deal</span> of the Week</p>
                    <h1 className='heading-2'><span className='primary'>Multi Brand <br /></span>Store of clothes week</h1>
                </div>
            </div>



            {/*About section  */}

            <div name='about'></div>
            <div className="container text-light">
                <div className='my-5 text-center'>
                    <h1 className='text-center'>All <span className='primary'>About</span> Company</h1>
                    <p className='text-secondary'>Official representative of the world-famous clothing brand <br /> Fasionee in europeand the world</p>
                </div>

            </div>



            <div className="container text-light content">
                <div className='about-text'>

                    <h2 className='primary'><span className='vertical-text mt-3 primary'>2023</span> The Begining of our Journey</h2>
                    <p className='ms-5'>in 2010 our company celebrated 10th anniversery - these are the year of aqquired experience of trading
                        around the world. Join is amoung our clients! you can only buy original things from us. we offer products of
                        your favourite brands- clothes, shoes, accessories, textiles, and much more- quality products for every
                        taste and age from europe.
                    </p>
                </div>

                <div className='h-100 mt-5'>
                    <p className="fw-bold fs-1 text-center mt-5"><span className="primary">2559</span> +</p>
                    <p className='text-center fs-3 fw-bold products-count'>Products for you</p>
                </div>


            </div>

            <div className="container text-light content">

                <div className='h-100 mt-5'>
                    <p className="fw-bold fs-1 text-center mt-5"><span className="primary">5649</span> +</p>
                    <p className='text-center fs-3 fw-bold products-count'>satisfied clients</p>
                </div>


                <div className='about-text'>

                    <h2 className='primary'><span className='vertical-text mt-3 primary'>2023</span> Who are we now?</h2>
                    <p className='ms-5'>We now have a team of 1,000 skilled workers and about 167 clothing brands that cooperate with us.
                        Ordering in our store is a saving of time and effort to find what you need; assistance of experienced consultants
                        in chosing a model. our specialist will help you specify.
                    </p>
                </div>


            </div>

            {/* Featured Products */}

            <div className="container text-light">
                <div className='my-5 text-center'>
                    <p className='text-uppercase fw-bold '>New Collection</p>
                    <h1 className='text-center'>Featured <span className='primary'>Products</span></h1>
                    <div className="section-products">
                        <div className="row">
                            {product_slice.map((product) => (
                                <Card product={product} />

                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* contact us */}


            <div name='contact-us' className="container text-light">
                <div className='my-5 text-center'>
                    <h1 className='text-center'>Contact <span className='primary'>Us</span></h1>
                </div>

            </div>


            {/*Form  */}


            <div className="container ">
                <section className="mb-4 text-light p-5">
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-6 mt-2">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className='fw-bold'>Your name</label>
                                            <input type="text" id="name" name="name" className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-2">
                                        <div className="md-form mb-0">
                                            <label htmlFor="email" className='fw-bold'>Your email</label>
                                            <input type="text" id="email" name="email" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="subject" className='fw-bold'>Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <label htmlFor="message" className='fw-bold'>Your message</label>
                                            <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea" />

                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left mt-5">
                                <button className="btn btn-submit" onClick={() => document.getElementById('contact-form').submit()}>
                                    Submit
                                </button>
                            </div>
                            <div className="status"></div>
                        </div>

                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <FaMapMarkerAlt className='fs-1 primary' />
                                    <p className='mt-3'>San Francisco, CA 94126, USA</p>
                                </li>
                                <li>
                                    <FaPhone className=" mt-4 fs-1 primary" />
                                    <p className='mt-3'>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <FaEnvelope className="mt-4 fs-1 primary" />
                                    <p className='mt-3'>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>




            </div>
        </div>





    )
}
