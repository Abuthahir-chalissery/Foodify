import { useState } from "react";

const User = (props) => {
    const [count]  = useState(0)
    const { name } = props;
    return(
        <div className="user-card text-green-500">
            <h1>Name: {name}</h1>
            <h1>Location: Chalissery</h1>
            <h1>Contact: 9778238561</h1>    
        </div>
    )
}

export default User;