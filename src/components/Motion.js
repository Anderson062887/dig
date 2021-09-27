import React,{Component} from "react";

export class Motion extends Component{
    constructor(props){
        super(props)
        this.state ={
            incls:props.incls,
            outcls:props.outcls,
            cls:props.incls,
        }
    }

    componentWillUnmount(){
        this.setState({cls:this.state.outcls})

    }
    render(){
       return(
           <div className={this.state.cls}>
              
               {this.props.children}
           </div>
       )
    }
}