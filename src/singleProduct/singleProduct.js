import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'
import { NavLink, useParams } from 'react-router-dom'
import './singleProduct.scss'
import Header from '../component/Header/Header'
import { FaArrowLeft } from "react-icons/fa6";

const SingleProduct = () => {
    const { getSingleProduct, singleProduct, addToCart } = useGlobalContext()
    const { id } = useParams()
    const { id: product, title, image, description, price,category } = singleProduct
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        getSingleProduct(`https://fakestoreapi.com/products/${id}`)
    }, [])
    return (
        <>
            <Header />

            <section className="prodcutSection">
                <NavLink to={`/`}>
                    <button className='backBtn'><FaArrowLeft /> Go Back</button>
                </NavLink>
                <div className="productCard">
                    <div className='image'>
                        <img src={image} alt={id} />
                    </div>

                    <div className="cardContent">
                        <p className="title">{title} </p>
                        <p className="category">{category}</p>
                        <p className="price">${price} </p>
                        <p className="discription">{description} </p>
                        <NavLink to={`/AddToCart`} onClick={() => addToCart(id, price, image, title, quantity)}>
                            <button className='addToCartBtn'>
                                ADD TO CART
                            </button>
                        </NavLink>
                        <div className="incr-decr-btn">
                            <button className="incr-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                            <input className='quantity' type="" placeholder='1'
                                value={quantity} />
                            <button className="decr-btn" onClick={() => (quantity > 1  ? setQuantity(quantity - 1) : setQuantity(1))}>-</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SingleProduct
