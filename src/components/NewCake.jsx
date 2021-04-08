import React ,{useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/actions";

function NewCake(props)
{
   const [cakesToBuy,setCakesToBuy] = useState('0');

    return(
        <div>
            <input placeholder="Enter cakes to buy" value={cakesToBuy} type="text" onChange={(e)=>setCakesToBuy(e.target.value)}>
            </input>

            <button onClick={()=>props.buyCake(parseInt(cakesToBuy))}>Buy {cakesToBuy} cakes</button>
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return {buyCake:n=>dispatch(buyCake(n))}
}

export default connect(null,mapDispatchToProps)(NewCake);
