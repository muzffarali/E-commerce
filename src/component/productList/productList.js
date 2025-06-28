import React from 'react'
import { useGlobalContext } from '../../context/context'
import { NavLink } from 'react-router-dom'
import './productList.scss'

const ProductList = () => {
    const { product, addToCart } = useGlobalContext()
    console.log(product)
    return (
        <>
            <section className='productContainer'>
                {product.map((curElem) => {
                    const { image, title, id, price } = curElem
                    const productName = title.substring(0, 15)
                    return (
                        <>
                            <NavLink to={`product/${id}`} style={{ textDecoration: 'none' }}>
                                <div className="card">
                                    <div className='cardInfo'>
                                        <img src={image} alt={id} />
                                        <p className='price'>${price}</p>
                                        <h2>{productName.length >= 15 ? `${productName}...` : productName}</h2>
                                        <button className='addBtn'>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </NavLink>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default ProductList
