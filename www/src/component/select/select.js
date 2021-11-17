import React from "react"

import "./select.css"

const Select = (props) =>{
    return(
        <div className="selectContainer">
            <div className="selectHeader">
                <div className="selectTitle">
                    <p>{props.title}</p>
                </div>
                <div className="selectImage">
                    {props.value ? <img src={`https://api.futn.ir/api${props.value.image}`}/> : null}
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Select