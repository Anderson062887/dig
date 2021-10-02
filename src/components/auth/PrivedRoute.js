import React, { useState } from 'react';
import {Route,Redirect} from "react-router-dom";
import Loader from "../Loader"
import {Consumer} from "../../Data";




 export const PriveRoute = ({component:Component,redirectPath,...rest})=>{
    const tokenInLocalStorage = JSON.parse(localStorage.getItem("user"));

    return(
       <Consumer>
          {({user,checkUser,isAuth})=>{ 
                return(
                        <Route exact {...rest} render={(props)=>{
                            if(isAuth){
                                return <Component {...props} />
                            }else{
                                return <Redirect to={{pathname:"/login",state:{from:props.location}}}/>
                                //  return <Redirect to={tokenInLocalStorage === null?rest.path:redirectPath}/>
                            }
                         }
                }/> )  }

          }

        </Consumer>
        )
 

}
