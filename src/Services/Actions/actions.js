import ADD_TO_CART from "../Constants"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART, // to show redux about which operation to be done
        data: data // conatining product name, price and all details
    }
}