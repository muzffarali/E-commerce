import React, { useContext, useEffect, useReducer } from 'react'
import ProductReducer from "../reducer/productReducer"
import axios from "axios"
const API_URL = `https://fakestoreapi.com/products`

const AppContext = React.createContext()

const initialState = {
    product: [],
    singleProduct: {},
    cart: [],
    shipping_fee: '5',
    total_price: ''
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState)
    const getProduct = async (url) => {
        const res = await axios.get(url)
        const product = await res.data
        dispatch({ type: "SET_PRODUCT", payload: product })
    }
    const getSingleProduct = async (url) => {
        const res = await axios.get(url)
        const singleProduct = await res.data
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
    }
    const addToCart = (id, price, image, title, quantity) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, price, image, title, quantity } })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
    const setDecr = (id) => {
        dispatch({ type: "SET_DECR", payload: id })
    }
    const setIncr = (id) => {
        dispatch({ type: "SET_INCR", payload: id })
    }
    useEffect(() => {
        localStorage.setItem("productCart", JSON.stringify(state.cart))
    }, [state.cart])
    useEffect(() => {
        getProduct(API_URL)
    }, [])

    return <AppContext.Provider value={{ ...state, getProduct, getSingleProduct, addToCart, removeItem, setDecr, setIncr, dispatch }}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }

