import {BUY_CAKE} from "./actionTypes";

export const buyCake = (n=1)=>{
    return{
        type:BUY_CAKE,
        payload:n
    }
}
