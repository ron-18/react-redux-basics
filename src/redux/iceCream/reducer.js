import {BUY_ICECREAM} from "./actionTypes";

const initialState = {
    noOfIceCream:20
}

export const iceCreamReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return{
                noOfIceCream:state.noOfIceCream-action.payload
            }

        default:
            return state;
    }
}
