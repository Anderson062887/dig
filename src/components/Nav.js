import React,{Component} from "react";
import {NavLink,Link,withRouter} from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import "./styles/Nav.css";
import {Consumer} from "../Data";
 // window.localStorage.removeItem("user");
                // setUser(false,null);
const AuthBtn = withRouter((props)=>{
    
    return(
        <Consumer>
            {({isAuth,setUser})=>
              isAuth === true ?<button className="btn" onClick={()=>{
                window.localStorage.removeItem("user");
                  setUser(false,null)
                  props.history.push("/login")
                }}>sign out</button>:null
            }
        </Consumer>
    )
})


class Nav extends Component{
constructor(props){
    super(props)
}

    render(){
        // console.log(this.props.loc.location.pathname)
        // const {match}= this.props;
       
       
        return(
            <nav>
            <div className="main-nav wrap">
                
                
                <Consumer>
                   {({user})=>{

                       return(
                           <>
                      {user === true?<div className="user-avatar-box"><Link to="/profile">{user.image?<img alt="" src={user.image}/>:<IoMdPerson className="user-avatar-box" />}</Link></div>:null}  
                        <ul>
                        <AuthBtn />
                          {!user?
                              <>
                         <li> <NavLink   to="/login">Log In </NavLink></li>
                         <li><NavLink to="/register">Register</NavLink></li>
                              </>:<>
   
                              <li><NavLink to="/task/all">All Task</NavLink></li>
                              {/* <li><NavLink to="/logout">Log out</NavLink></li> */}
                             
                              </>
                          }

                          </ul>
                      </> )
                   }
                   }


                </Consumer>
            </div>
            </nav>
        )
    }
}

export default Nav;