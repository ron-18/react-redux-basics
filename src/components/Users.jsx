import React from "react";

function Users(props) {
    return(
        <div>
            <h2>
                Our Lucky Winners For this Week
            </h2>
            <ul>
                {props.users.map(user=><li>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default Users;
