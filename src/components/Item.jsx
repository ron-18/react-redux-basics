import React from "react";
import {connect} from "react-redux";
import {buyCake} from "../redux/cake/actions";
import {buyIceCream} from "../redux/iceCream/actions";

function Item(props){

    return(
        <div>
            <h4>Items: {props.noOfItem}</h4>
            <button style={{cursor:"pointer"}} onClick={()=>props.buyItem()}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    return (ownProps.item === "cake"?{noOfItem:state.cake.noOfCake}:{noOfItem:state.iceCream.noOfIceCream})
}

const mapDispatchToProps = (dispatch , ownProps)=>{
    return ownProps.item === "cake"?{buyItem:()=>dispatch(buyCake())}:{buyItem:()=>dispatch(buyIceCream())}
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);
