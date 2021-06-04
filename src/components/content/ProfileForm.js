import React, { Component } from 'react'
import { Link, BrowserRouter } from "react-router-dom";

export default class ProfileForm extends Component {
    render() {
        return (
            <div>
                <Link to="/home">Go To Home</Link>
                Hello
            </div>
        )
    }
}
