import React from "react";
import {Consumer} from "../../Data";

class Logout extends React.Component{
    constructor(){
        super();
        this.handlelogout = this.handlelogout.bind(this);
    }

    componentDidMount(){
        this.handlelogout();
        this.setUser(false,null)
    }
    handlelogout(){
      window.localStorage.removeItem("user");
    }

    render(){

        return(

            <Consumer>
                {({setUser})=>{
                 this.setUser = setUser;
                 return this.props.children;
                } }
                
            </Consumer>
        )
        
        
    }
}

export default Logout;