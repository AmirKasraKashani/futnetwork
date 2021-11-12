import React, {useState, useEffect} from "react"
import Select from "../select/select"
import Filter from "../filter/filter"
import axios from "../../axios"
import "./analyser.css"
import Graph from "../graph/graph"
import Adjective from "../adjective/adjective"
import football from "../../assets/images/football.png"
import gym from "../../assets/images/gym.png"
import {Link} from "react-router-dom"
import About from "../about/about"

const Analyser = (props) =>{
    const [nav, setNav] = useState("Leagues")
    const [nations, setNations] = useState([])
    const [leagues, setLeagues] = useState([])
    const [clubs, setClubs] = useState([])
    const [players, setPlayers] = useState()
    const [nation, setNation] = useState()
    const [club, setClub] = useState()
    const [league, setLeague] = useState()
    const [physical, setPhysical] = useState({
        height: false,
        weight: false,
        age: false,
    })
    const [attribute, setAttribute] = useState({
        pace: false,
        shooting: false,
        passing: false,
        dribbling: false,
        defending: false
    })
    const [adjectives, setAdjectives] = useState()
    const updateAdjective = () =>{
        const temp = [attribute, physical].map(adjective =>{
            const keys = Object.keys(adjective)
            const adj = []
            for(let key of keys){
                if(adjective[key] === true){
                    adj.push(key)
                }
            }
            return adj
        })
        setAdjectives(temp)
    }
    useEffect(() =>{
        axios.get("/nations")
        .then(({data}) =>{
            setNations(data)
        })
        .catch(err =>{
            console.log(err)
        })
        axios.get("/leagues")
        .then(({data}) =>{
            setLeagues(data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    useEffect(() =>{
        league !== undefined ? 
        axios.get(`/clubs?league=${league.id}`)
        .then(({data}) =>{
            setClubs(data)
        })
        .catch(err =>{
            console.log(err)
        })
        : console.log("none")
    }, [league])
    useEffect(() =>{
        club !== undefined?
        axios.get(`/players?club=${club.id}${nation? `&nation=${nation.id}`: ""}`)
        .then(({data}) =>{
            setPlayers(data)
        })
        .catch(err =>{
            console.log(err)
        })
        : console.log("none")
    }, [club, nation])
    if(players && adjectives){
        Graph(players,adjectives)
    }
    const onReset = (setState) =>{
        setState()
    }
    const onChangeNav = (name) =>{
        // if(name === "Clubs" && !league){
        //     return
        // }
        setNav(name)
    }
    let filter = undefined
    switch(nav){
        case "Leagues":
            filter = (
                <Select value={league} title="Leagues">
                    <Filter key="Leagues" onSelect={(id, name, image) =>{
                        setLeague({
                            id: id,
                            name: name,
                            image: image
                        })
                    }}  
                    data={leagues}/>
                </Select>
            )
            break
        case "Clubs":
            filter = (
                <Select value={club} title="Clubs">
                    <Filter key="Clubs" onSelect={(id, name, image) =>{
                        setClub({
                            id: id,
                            name: name,
                            image: image
                        })
                    }}  
                    data={clubs}/>
                </Select>
            )
            break
        case "Nations":
            filter = (
                <Select value={nation} title="Nations">
                    <Filter key="Nations" onSelect={(id, name, image) =>{
                        setNation({
                            id: id,
                            name: name,
                            image: image
                        })
                    }}  
                    data={nations}/>
                </Select>
            )
            break
        case "Options":
            filter = (
                <Adjective 
                    key="Options"
                    data={[
                        {
                            category: "phyical",
                            state: physical,
                            image: gym,
                            setState: setPhysical,
                            adjectives: ["height", "weight", "age"]
                        },
                        {
                            category: "attribute",
                            state: attribute,
                            image: football,
                            setState: setAttribute,
                            adjectives: ["pace", "shooting", "passing", "dribbling", "defending"]
                        },
                    ]}
                    updater= {updateAdjective}
                    />
            )
            break
        case "About":
            filter = (
                <About/>
            )
            break
    }
    return(
        <div className="analyserContainer">
            <div className="analyser">
                <div className="analyserControls">
                    <div className="analyserNav">
                        <ul>
                            <li onClick={() => onChangeNav("Leagues")} style={nav === "Leagues"? {color: "#F5B93D"}: {color: "#ffffff", backgroundColor: "#00000085"}}>Leagues</li>
                            <li onClick={() => onChangeNav("Clubs")} style={nav === "Clubs"? {color: "#F5B93D"}: {color: "#ffffff", backgroundColor: "#00000085"}}>Clubs</li>
                            <li onClick={() => onChangeNav("Nations")} style={nav === "Nations"? {color: "#F5B93D"}: {color: "#ffffff", backgroundColor: "#00000085"}}>Nations</li>
                            <li onClick={() => onChangeNav("Options")} style={nav === "Options"? {color: "#F5B93D"}: {color: "#ffffff", backgroundColor: "#00000085"}}>Options</li>
                            <li onClick={() => onChangeNav("About")} style={nav === "About"? {color: "#F5B93D"}: {color: "#ffffff", backgroundColor: "#00000085"}}>About</li>
                        </ul>
                    </div>
                    {
                        filter
                    }
                    {/* <div className="analyserFooter">
                        <ul>
                            <li>
                                <Link to="/">Back</Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="graphContainer">
                    <div className="graph" id="mynetwork">
                    </div>
                    <div className="console">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyser