import React from "react";
import {Consumer} from "../Data";
import "../components/styles/tasks.css";
import {Filter }from "./Filter";
import Loader from "./Loader";
import {Motion} from "./Motion"
 const AllTaskDisplay = ({history})=>{

       
                return(
                    <Consumer>
                    
                    {({tasks})=>{
                        console.log(tasks)
              
                        
                            return(
                                <div className="wrap">
                                <div className="inner-wrap cart-wrap">
                                <Motion incls="fadein">
                                <button className="move-btn" onClick={()=>history.goBack()}>👈🏻  </button>
                                 {tasks?<Filter list={tasks}/>:<Loader />} 

                                    {/* <div>
                                        <button className="move-btn" onClick={()=>history.goBack()}>👈🏻  </button>
                                        <h2>ALL TASK</h2>
                                    {tasks.map((t)=> <div key={t._id} className="cart">
                                        <h3>{t.title}</h3>
                                        <p>{t.description}</p>
                                        <Link className="move-btn" to={`/task/${t._id}`}> 📤 </Link>
                                            </div>  )}
                                    </div> */}
                                    </Motion>
                
                                </div>
                
                            </div>)


                    }}
                </Consumer>
                )
    
        
}

export default AllTaskDisplay;