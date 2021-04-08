import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/actions";

function IceCream(){
    const iceCreams = useSelector(state=>state.iceCream.noOfIceCream);
    const dispatch = useDispatch();
    return(
        <div>
            <h4>Number of Ice-cream: {iceCreams}</h4>
            <button style={{cursor:"pointer"}} onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCream;
