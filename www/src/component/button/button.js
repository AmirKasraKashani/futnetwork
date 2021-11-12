import React from "react"

import "./button.css"

export const Switch = (props) =>{
    return(
        <label class="switch">
            <input {...props} type="checkbox"/>
            <span class="slider"></span>
        </label>
    )
}