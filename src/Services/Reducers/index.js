// THIS IS ROOT REDUCER AS ONE PROJECT WILL HAVE ONLY ONE STORE 
// BUT CAN HAVE MORE THAN ONE REDUCER SO THIS REDUCER ACT AS "ROOT-REDUCER" TO COMBINE ALL REDUCERS


import { combineReducers } from 'redux'; // high-level reducer


import cardItems from "./reducer";


// combining all recduers


export default combineReducers(
    {
        cardItems, // can have more reducer to combine
    }
)


// rightnow "redux-store" is only having cardItems