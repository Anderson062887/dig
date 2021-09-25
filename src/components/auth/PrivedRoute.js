import {Route,Redirect} from "react-router-dom";
import {Consumer} from "../../Data";




 export const PriveRoute = ({component:Component,redirectPath,...rest})=>{
    const tokenInLocalStorage = JSON.parse(localStorage.getItem("user"));

    return(
       <Consumer>
          {({user})=>{ 
       

                return(
                   
      
                        <Route exact {...rest} render={(props)=>{
                
                            if(user){
                                return <Component {...props} />
                            }else{
                                
                                return <Redirect to={tokenInLocalStorage !== null?rest.path:redirectPath}/>
                            }
                
                        }
                }/> )  }

          }

        </Consumer>
        )
 

}
