import React from "react"
const vis = require("vis-network")

const Graph = (players, adjectives) =>{
    const edges = []
    players.forEach(player1 => {
        players.forEach(player2 =>{
            if(player1 != player2 && player1.name !== player2.name){
                let test = []
                for(let adjective of adjectives){
                    for(let adj of adjective){
                        if(player1[adj] === player2[adj]){
                            test.push(true)
                        }else{
                            test.push(false)
                        }
                    }
                }
                let same= false
                if(test.includes(false) !== true && test.length !== 0){
                    same= true
                }
                if(same === true){
                    edges.push({
                        from: player1.id,
                        to: player2.id,
                    })                    
                }
            }
        })
    })
    const nodes = players.map(player =>{
        return {
            id: player.id,
            shape: 'image',
            label: player.name,
            image: `http://localhost:8000/api${player.image}`,
        }
    })
    var container = document.getElementById("mynetwork");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = {
        nodes:{
            font: {color: "#ffffff"}
        },
        edges:{
            scaling: {
                customScalingFunction: function (min,max,total,value) {
                    return value/total;
                },
                min:1,
                max:200
            },
            color: {
                color:'#F5B93D',
                highlight:'#848484',
                hover: '#d3d2cd',
                inherit: false,
                opacity:1.0
            }
        },
        physics: {
        forceAtlas2Based: {
            gravitationalConstant: -26,
            centralGravity: 0.005,
            springLength: 230,
            springConstant: 0.18,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
        },
    };
    var network = new vis.Network(container, data, options);
}

export default Graph