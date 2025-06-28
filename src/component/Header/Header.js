import React from 'react'
import './Header.scss'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header className='header'>
                <nav>
                    <NavLink to={`/`}>
                    <h1>E-commerce</h1>
                    </NavLink>
                    <NavLink to={`/AddToCart`}>
                        <button>
                            Go to cart   <FaArrowRight />
                        </button>
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header
