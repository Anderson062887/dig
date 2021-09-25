
import {Consumer} from "../Data";
import {Motion} from "../components/Motion";
import "../components/styles/tasks.css";

import {Redirect} from "react-router-dom";



export const Task = ({match,history})=>{


    
    const {id} = match.params;
      return(
         
        <div className="wrap">
             <Consumer>
           
                {({tasks})=>{
                    if(!tasks){
                        return <Redirect to={"/task/all"} />;
                    }
               
                    console.log("task component")
                    const [info] = tasks.filter((t)=> t._id === id)
                    
                    return(
                        
                        <div className="cart-wrap">
                           <Motion incls="fadein" outcls="fadeout">
                            <button  className="move-btn" onClick={()=>history.goBack()}>👈🏻 </button>
                           <div className="task-images-wrap">
                                  {info.images.map((url,i)=> <div className={`image-cart item-${i}`} key={i} style={{backgroundImage:`url(${url})`}}> </div>)}
                           </div>
                          <span> status:{!info.complete?" Not complete":" Complete"}</span> 
                        <h2>{info.title}</h2>
                        <p>{info.description}</p>
                        <p>created by:{info.userId.name}</p>
                        {info.date?<p>{info.date}</p>:null}
                        </Motion>
                        </div>
                        
                    )

                }}
           
            </Consumer>

          </div>
      )
}