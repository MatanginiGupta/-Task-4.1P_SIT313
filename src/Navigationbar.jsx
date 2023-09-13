import React from 'react'
import './App.css'

function NavigationBar() {
    return(
    <div class="topnav">
        <logo><img src = {require("./Images/Logo.png")} alt="logo" width={150} height={50} /></logo>
        <a href="#news">Info</a>
        <a href="#contact">Putup Jobs</a>
        <a href="#contact">Find Jobs</a>
        <a href="#about">Log in</a>
        <a href="#account">Sign in</a>
    </div>
    )
}   

export default NavigationBar;