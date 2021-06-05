import React, { Component } from 'react'
import { Link, BrowserRouter } from "react-router-dom";

export default class ProfileForm extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    document.getElementById("id_Home").click();
                }}/>
                <Link to="/home">Go To Home</Link>
                Hello
            </div>
        )
    }
}
