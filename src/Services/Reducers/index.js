// THIS IS ROOT REDUCER AS ONE PROJECT WILL HAVE ONLY ONE STORE 
// BUT CAN HAVE MORE THAN ONE REUDER SO THIS REDUCER ACT AS "ROOT-REDUCER" TO COMBINE ALL REDUCERS


import { combineReducers } from 'react-redux'; // high-level reducer
import cardItems from "./reducer";

export default combineReducers(
    {
        cardItems, // can have more reducer to combine
    }
)