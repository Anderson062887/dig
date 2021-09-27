import {Route,Redirect} from "react-router-dom";
import {Consumer} from "../../Data";




 export const PriveRoute = ({component:Component,redirectPath,...rest})=>{
    const tokenInLocalStorage = JSON.parse(localStorage.getItem("user"));
     

    return(
       <Consumer>
          {({user,checkUser})=>{ 
            // console.log()

                return(
                   
      
                        <Route exact {...rest} render={(props)=>{
                
                            if(user){
                                console.log("rest")
                                return <Component {...props} />
                            }else{
                                if(tokenInLocalStorage !== null){
                                    
                                    checkUser(tokenInLocalStorage )
                                }else{
                                    return <Redirect to={redirectPath}/>
                                }

                                 
                                // return <Redirect to={tokenInLocalStorage !== null?rest.path:redirectPath}/>
                            }
                
                        }
                }/> )  }

          }

        </Consumer>
        )
 

}
