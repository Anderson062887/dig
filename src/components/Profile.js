// import {Motion}
import React,{Component} from "react";
import{Link,Redirect} from "react-router-dom";
import {Consumer} from "../Data";
import "./styles/profile.css";
import {Motion} from "./Motion"
// import Loader from "./Loader"

class Profile extends Component{


   
    render(){
    
        return(
           
            <Consumer>
               
                {({user})=>{
                  
 
                    const{name,last,email,create,createdTask} = user;


                           return(
                             <div className="wrap ">
                             <div className="inner-wrap profile-wrap fadein">
                                 <div className="profile-wrap">
                                     <nav>
                                         <Link className="move-btn"  to="/profile/create">🛠</Link>
                                     </nav>
                                 </div>
                                {/* pass data to this component by context */}
                                  <div className="profile-text-wrap">
                                   <h3 >Name:</h3>
                                   <p>{name}</p>
                                   </div>
                                   <div className="profile-text-wrap">
                                   <h3 >Last:</h3>
                                 <p>{last}</p>
                                 </div>
                                 <div className="profile-text-wrap">
                                 <h3>Email:</h3>
                                 <p>{email}</p>
                                 </div>

                                 <ul>
                                     <h2>My Task</h2>
                                 {createdTask.length > 0?createdTask.map((t,i)=><li key={i}>{t.title}  <Link className="move-btn" to={`/task/${t._id}`}>  👀 </Link></li>):<p>I don't have any task yet</p>}
                                 </ul>
                                  
                                 {/* <Link className="move-btn" to={`/task/${t._id}`}> 📤  👀 </Link> */}
                             </div>
             
                         </div>)


                }}
            </Consumer>


      
        )
    }
}
export default Profile;