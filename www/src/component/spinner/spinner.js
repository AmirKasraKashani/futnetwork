import React from "react"
import "./spinner.css"

export const Spinner = (props) =>{
    return(
        <div style={props.style} className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
} 