import React from 'react';
import { Link } from "react-router-dom";



export default function ProfileForm() {
    return (
        <div>
            <button onClick={()=>{
                    document.getElementById("id_Home").click();
                }}/>
                <Link to="/home">Go To Home</Link>
            
        </div>
    )
}

