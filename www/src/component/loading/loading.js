import React from "react"
import {Spinner} from "../../component/spinner/spinner"

import "./loading.css"

const Loading = (props) => {
    return (
        <main className="loading">
            <Spinner/>
        </main>   
    )
}

export default Loading