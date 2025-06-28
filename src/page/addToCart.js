import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import './addToCart.scss'
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from '../component/Header/Header'
import { NavLink } from 'react-router-dom';
const AddToCart = () => {
    const { cart, removeItem, setDecr, setIncr, shipping_fee,
        total_price, dispatch } = useGlobalContext()
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_PRICE" })

    }, [cart])

    return (
        <>
            <Header />
            <div className="cartPage">
                <h1>Cart Item</h1>
                <div className="cart-heading five">
                    <p>Item</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Remove</p>
                </div>

                {cart.map((curElem) => {
                    const { id, image, title, price, quantity } = curElem
                    console.log(quantity)
                    return <div className="cartContaniner">
                        <img src={image} alt={id} />
                        <span className="incrDecrBtn">
                            <button className="incr-btn" onClick={() => setIncr(id)}>+</button>
                            <input className='quantity' placeholder={quantity} value={quantity} />
                            <button className="decr-btn" onClick={() => setDecr(id)}>-</button>
                        </span>
                        <p className='price'>${price}</p>
                        <button className='removeBtn' onClick={() => removeItem(id)}><FaTrashAlt /></button>
                    </div>
                })}
                <NavLink to={`/`}>
                <button className='cartBackbtn'><FaArrowLeftLong /> Continue shopping</button>
                </NavLink>
            </div>
        {cart.length >= 1 ?  <div className="totalAoumnt"> 
                    <div>
                        <span>Subtotal:</span>
                        <p>${total_price}</p>
                        </div>
                        <div>
                        <span>shipping Fee:</span>
                        <p>${shipping_fee}</p>
                        </div>
                    <hr />
                    <div>
                        <span>Total order:</span>
                        <p>${ total_price + shipping_fee }</p>
                        </div>
            </div>: null } 

        </>
    )
}

export default AddToCart
