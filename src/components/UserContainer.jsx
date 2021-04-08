import React,{useEffect} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../redux/user/asyncActions";
import {Spinner} from "react-bootstrap";
import Users from "./Users";

function UserContainer(props){

    useEffect(()=>{
        props.fetchUsers();
    },[])

    return(
        <div>
            {props.loading?<Spinner animation="border" role="status"/>:props.err?<h2>Sorry something went wrong</h2>:<Users users={props.users}/>}
            
        </div>
    )
}

const mapStateToProps = (state)=>{
    
    return{
        loading:state.user.loading,
        users:state.user.data,
        err:state.user.error
    }
}

const mapDispatchToProps = (dispatch)=>{

    return {
        fetchUsers:()=>dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);
