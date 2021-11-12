import React,{useEffect, useState} from "react"
import "./adjective.css"
import {Switch} from "../button/button"

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Adjective = (props) =>{
    const [category, setCategory] = useState(props.data[0])
    const categories = props.data.map(item =>(
        <li style={item.category === category.category ? {backgroundColor: "#ffffff"} : {backgroundColor: "#858686"}} onClick={() =>setCategory(item)} key={item.category}>
            <img src={item.image}/>
        </li>
    ))
    const buttons = category.adjectives.map(name =>{
        return(
            <li key={name} onClick={() => {
                let temp = category.state
                temp[name] = !temp[name]
                category.setState(temp)
                props.updater()
            }}>
                <div className="adjectiveIcon">
                    <p>{capitalizeFirstLetter(name)}</p>
                </div>
                <span>
                    <p style={category.state[name] === true ? {color: "#33A200"} : {color: "#FF2D00"}}>{category.state[name] === true ? "ON" : "OFF"}</p>
                </span>
            </li>
        )
    })
    return(
        <div className="adjective">
            <div className="category">
                <div className="adjectiveTitle">
                    <p>Options</p>
                </div>
                <ul className="categoryImages">
                    {categories}
                </ul>
                <div className="categoryName">
                    <h1>{category.category.toUpperCase()}</h1>
                </div>
            </div>
            <div className="adjectives">
                <ul>
                    {buttons}
                </ul>
            </div>
        </div>
    )
}

export default Adjective