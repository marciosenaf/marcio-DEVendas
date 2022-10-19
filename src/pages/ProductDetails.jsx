import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import '../styles/product-details.css'
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList"
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {

    const [tab, setTab] = useState('desc')
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const [rating, setRating] = useState(null)
    const { id } = useParams()
    const product = products.find(item => item.id === id)
    const dispatch = useDispatch()

    const { imgUrl,
        productName,
        price,
        avgRanting,
        reviews,
        description,
        category,
        shortDesc } = product

    const relatedProduts = products.filter(item => item.category === category)

    const submitHandler = (e) => {
        e.preventDefault()

        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value

        const reviewObj = {
            UserName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }

        console.log(reviewObj);
        toast.success("Review submitted")
    }

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price
        }))

        toast.success('Product added successfully')

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product]);

    return (
        <Helmet title={productName}>
            <CommoSection />

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg="6">
                            <div className="products__details">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex alingn-items-center gap-5 mb-3" >
                                    <div>
                                        <span>
                                            <i class="ri-star-s-fill"></i>
                                        </span>

                                        <span >
                                            <i class="ri-star-s-fill"></i>
                                        </span>

                                        <span >
                                            <i class="ri-star-s-fill"></i>
                                        </span>

                                        <span >
                                            <i class="ri-star-half-s-line"></i>
                                        </span>

                                        <span >
                                            <i class="ri-star-half-s-line"></i>
                                        </span>

                                    </div>

                                    <p>
                                        ( <span>{avgRanting}</span> ratings)
                                    </p>
                                </div>

                                <div className="d-flex align-items-center gap-5">
                                    <span className="product__price">${price}</span>
                                    <span>Category: {category}</span>
                                </div>

                                <p className="mt-3">{shortDesc}</p>

                                <motion.button whileTap={{ scale: 1.2 }}
                                    className="buy__btn" onClick={addToCart}>
                                    Add to Cart
                                </motion.button>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="table__wrapper d-flex align-items-center gap-5">

                                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('desc')}>
                                    Description</h6>

                                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('rev')}>
                                    Reviews({reviews.length})</h6>

                            </div>

                            {
                                tab === 'desc' ? (
                                    <div className="tab__content mt-5">
                                        <p>{description}</p>
                                    </div>
                                ) : (
                                    <div className="product__review mt-5 ">
                                        <div className="review__wrapper">
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li kew={index} className="mb-4">
                                                            <h6>Marcio Sena</h6>
                                                            <span>{item.rating} (rating) </span>
                                                            <p>{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                                            <div className="review__form">
                                                <h4>Leave your experience</h4>
                                                <form action="" onSubmit={submitHandler}>
                                                    <div className="form__group" >
                                                        <input type="text" placeholder="Enter name" ref={reviewUser} />
                                                    </div>

                                                    <div className="form__group d-flex align-items gap-5 rating__group">

                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>
                                                            1<i class="ri-star-s-fill"></i>
                                                        </motion.span>

                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>
                                                            2<i class="ri-star-s-fill"></i>
                                                        </motion.span>

                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>
                                                            3<i class="ri-star-s-fill"></i>
                                                        </motion.span>

                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>
                                                            4<i class="ri-star-s-fill"></i>
                                                        </motion.span>

                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>
                                                            5<i class="ri-star-s-fill"></i>
                                                        </motion.span>
                                                    </div>

                                                    <div className="form__group" >
                                                        <textarea
                                                            ref={reviewMsg}
                                                            rows={4}
                                                            type="text"
                                                            placeholder="Review Message..." />
                                                    </div>

                                                    <button tyoe='submit' className="buy__btn" >Submit</button>

                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                )}

                        </Col>
                        <Col lg='12' className="mt-5">
                            <h2 className="related__title">
                                You might also like
                            </h2>
                        </Col>

                        <ProductsList data={relatedProduts} />

                    </Row>
                </Container>
            </section>

        </Helmet>
    )
};

export default ProductDetails;