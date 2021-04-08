import React from "react";
import { buyCake } from "../redux/cake/actions";
import {useSelector,useDispatch} from "react-redux";

function Cake()
{
    const cakes = useSelector(state=>state.cake.noOfCake);
    const dispatch = useDispatch();

    return (
    <div>
        <h4>Number of Cake: {cakes}</h4>
        <button style={{cursor:"pointer"}} onClick={()=>dispatch(buyCake())}>Buy Cake</button>

    </div>
    )
}


export default Cake;
