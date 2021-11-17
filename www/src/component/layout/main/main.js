import React,{useContext, useEffect} from "react"
// import Navbar from "../../component/navigation/navbar/navbar" 
// import Footer from "../../component/footer/footer"
// import SideDrawer from "../../component/navigation/sideDrawer/sideDrawer"
// import Notifications from "../../component/notifications/notifications"
import {Helmet} from "react-helmet";
import "./main.css"

const  Main =  (props) =>{
    return(
        <div className="main">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
            </Helmet>
            {/* <Notifications/> */}
            {/* {props.navbar ? <Navbar/> : null} */}
            {/* {props.sideDrawer ? <SideDrawer/> : null} */}
            {props.children}
            {/* {props.footer ? <Footer/> : null} */}
        </div>
    )

}

export default Main