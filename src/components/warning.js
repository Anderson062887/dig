import React,{Component} from "react";

class Warning extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <>
            <span className="warn">{this.props.msg}</span>
            </>
        )
    }
}
export default Warning;