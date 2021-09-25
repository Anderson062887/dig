import react,{Component} from "react";
import {NavLink,Link} from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import "./styles/Nav.css";
import {Consumer} from "../Data";


class Nav extends Component{

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
                      {user?<div className="user-avatar-box"><Link to="/profile">{user.image?<img alt="" src={user.image}/>:<IoMdPerson className="user-avatar-box" />}</Link></div>:null}  
                        <ul>
                          
                          {!user?
                              <>
                         <li> <NavLink   to="/login">Log In </NavLink></li>
                         <li><NavLink to="/register">Register</NavLink></li>
                              </>:<>
   
                              <li><NavLink to="/task/all">All Task</NavLink></li>
                              <li><NavLink to="/logout">Log out</NavLink></li>
                              </>
                          }

                          </ul>
                      </> )
                   }}


                </Consumer>
            </div>
            </nav>
        )
    }
}

export default Nav;