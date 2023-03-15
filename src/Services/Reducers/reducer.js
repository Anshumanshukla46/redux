// two things
import { ADD_TO_CART } from './../Constants';
// 1. initial state (means in state what value will be initailsed in the object for storing in the STORE of REDUX)

// 2. now one swith case will be made to check what task to be done based on the TYPE of ACTION.JS


const initialState = {
    cardData: [] // can have more than one data
}

export default function cardItems(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
            break;

        default: return state
    }

}