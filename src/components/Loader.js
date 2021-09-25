import React from "react";

class Loader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:"Loading",
        }
    }

    activeLoader(){
    this.handle = setInterval(()=>{
        this.state.text !== "Loading" + "..."?
        this.setState((prev)=>({text:prev.text + "."})):
        this.setState({text:"Loading"})
        },400)
     }

    componentDidMount(){
        this.activeLoader();
    }

    componentWillUnmount(){
        clearInterval(this.handle)
    }

    render(){
        return(
            <div className="wrap">
            <p>{this.state.text}</p>
            </div>
        )
    }
}
export default Loader;