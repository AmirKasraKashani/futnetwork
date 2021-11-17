import React,{Component} from "react"
import Layout from "../../layout/main/main"
import Loading from "../../loading/loading"

const asyncComponent  = (importComponent, props) =>{
    return class extends Component{
        state = {
            component: null
        }
        componentDidMount(){
            importComponent()
            .then(cmp =>{
                this.setState({component: cmp.default})
            })
        }
        render(){
            const Component = this.state.component
            return(
                Component && props.loaded ? 
                <Layout {...props}>
                    <Component {...this.props}/>
                </Layout>
                : <Loading/>
            )
        }
    }
}

export default asyncComponent