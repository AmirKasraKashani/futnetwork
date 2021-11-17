import React,{useEffect} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import asyncComponent from "./component/hoc/asyncComponent/asyncComponent"

const App = (props) =>{
  
  const asyncAnalyser = asyncComponent(() =>{
    return import("./component/analyser/analyser")
  },{
    title: "Analyser",
    navbar: true,
    footer: true,
    sideDrawer: true,
    loaded: true,
  })

  return(
    <Switch>
      <Route
        path="/"
        exact
        component={asyncAnalyser}
      />
    </Switch>
  )
}

export default App