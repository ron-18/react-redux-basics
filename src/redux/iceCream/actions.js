import {BUY_ICECREAM} from "./actionTypes";

export const buyIceCream = (n=1) =>{
    return {
        type:BUY_ICECREAM,
        payload:n
    }
}
