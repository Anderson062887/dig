import React from "react";
import {getMyProfile,allTask } from "./utils/Fech"
const dataContext  = React.createContext();
export class Dataprovider extends React.Component{
    constructor(){
        super();
        this.state = {
            user:null,
            tasks:null,
            token:null,
        
        }
        this.setUser = this.setUser.bind(this);
        this.checkUser = this.checkUser.bind(this);
        
    }         //it was task not token
    setUser(user,token){
        this.setState((prev)=>{
            return{user,token}
        })
    }

   async checkUser(token){
       console.log(token)
    const user = await getMyProfile(token);
    
            if(user){
                //const tasks = await allTask(token)
                // this.setState({user,tasks})
                this.setState({user,token})
            }else{
                window.localStorage.removeItem("user");
                this.setState({user:null,token:null})
            }
            
    
    }
   
    componentDidUpdate(prevProps,prevState){
        if(prevState.token !==  this.state.token && this.state.token !== null){
            allTask(this.state.token)
            .then(tasks =>{
               this.setState({tasks})
            }).catch(e =>{
                console.log(e)
            })
        }
    }

    componentDidMount(){
        //get user token from local storage
   
        
         const userHasToken = JSON.parse(localStorage.getItem("user"));
            if(userHasToken){
               this.checkUser(userHasToken)
            }
    }

    render(){
console.log("app was mounted")

        return(
            <dataContext.Provider value={
                {user:this.state.user,
                    tasks:this.state.tasks,
                    checkUser:this.checkUser,
                    setUser:this.setUser,}}>
                    
                {this.props.children}
            </dataContext.Provider>
        )
    }
}

export const Consumer = dataContext.Consumer;