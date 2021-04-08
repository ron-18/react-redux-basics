import React,{useState} from "react";
import {connect} from "react-redux";
import {buyIceCream} from "../redux/iceCream/actions";

function NewIceCream(props){
    const [iceCreamToBuy,setIceCreamToBuy] = useState("0");
    return(
        <div>
            <input placeholder="Enter icecreams to buy" type="text" value={iceCreamToBuy} onChange={(e)=>setIceCreamToBuy(e.target.value)}></input>
            <button onClick={()=>props.buyIceCream(parseInt(iceCreamToBuy))}>Buy {iceCreamToBuy} Icecreams</button>
        </div>
    )
}

const mapDispatchtoProps = (dispatch)=>{
    return {buyIceCream:(n)=>dispatch(buyIceCream(n))}
}

export default connect(null,mapDispatchtoProps)(NewIceCream);
