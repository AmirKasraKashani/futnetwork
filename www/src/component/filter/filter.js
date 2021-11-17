import React,{useState} from "react"
import "./filter.css"

const Filter = (props) =>{
    const [search, setSearch] = useState("");
    const data = props.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    const items = data.map(item =>(
        <li className={props.state && props.state.name === item.name ? "chosen": null} key={item.id} onClick={() =>props.onSelect(item.id, item.name, item.image)}>
            <p>{item.name}</p>
        </li>
    ))
    return(
        <div className="filter">
            <div className="filterSearch">
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search"/>
            </div>
            <ul className="scrollbar">
                {items}
            </ul>
        </div>
    )
}

export default Filter