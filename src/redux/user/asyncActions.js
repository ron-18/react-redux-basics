import axios from "axios";
import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from "./actions";

export const fetchUsers = ()=>async(dispatch,getState)=>{
    
    dispatch(fetchUserRequest());

    try{

        await setTimeout(()=>console.log("request made for fetching users"),2000); // to show spinner working

        const response =  await axios.get("https://jsonplaceholder.typicode.com/users");
        
        const filteredData = response.data.map(user=>{
            return {id:user.id,name:user.name}
        });

        dispatch(fetchUserSuccess(filteredData))
    }

    catch(err)
    {
        dispatch(fetchUserFailure(err));
    }

}


