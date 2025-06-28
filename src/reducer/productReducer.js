const ProductReducer = (state, action) => {
    switch (action.type) {

        case "SET_PRODUCT":
            return {
                ...state,
                product: action.payload
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct: action.payload
            }
        case "ADD_TO_CART":
            let { id, price, image, title, quantity } = action.payload;
            let existingPeoduct = state.cart.find((curElem) => curElem.id == id)
            if (existingPeoduct) {
                alert('This cart was already added!')
                let updateProduct = state.cart.map((curElem) => {
                    if (curElem.id == id) {
                        let newAmount = curElem.quantity + quantity;
                        return {
                            ...curElem,
                            quantity: newAmount
                        }
                    } else {
                        return curElem;
                    }
                })
                return {
                    ...state,
                    cart: updateProduct
                }
            } else {
                alert('Your cart is added')
                let cartProduct;
                cartProduct = {
                    id,
                    price,
                    image,
                    title,
                    quantity
                };

                return {
                    ...state,
                    cart: [...state.cart, cartProduct],
                }
            }
        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload)
            return {
                ...state,
                cart: updatedCart
            }
        case "SET_DECR":
            let updatedProductDecr = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decr = curElem.quantity - 1
                    if (decr <= 0) {
                        decr = 1;
                    }
                    return {
                        ...curElem,
                        quantity: decr,
                    }
                } else {
                    return curElem
                }
            })
            return { ...state, cart: updatedProductDecr }
        case "SET_INCR":
            let updatedProductIncr = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let incr = curElem.quantity + 1
                    return {
                        ...curElem,
                        quantity: incr,
                    }
                } else {
                    return curElem
                }
            })
            return { ...state, cart: updatedProductIncr }
        case "CART_TOTAL_PRICE":
            let total_price = state.cart.reduce((initialVal, curElem) => {
                let { price, quantity } = curElem
                initialVal = initialVal + price * quantity
                return initialVal
            }, 0)
            return {
                ...state,
                total_price,
            }

        default:
            return state
    }

}

export default ProductReducer

