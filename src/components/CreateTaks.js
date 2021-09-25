import {Motion} from "./Motion"
import React,{useState} from "react";


 class CreateForm extends React.Component{
     constructor(props){
         super(props);
         this.state ={
             title:"",
             description:"",
             images:"",

         }
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(e){
 
         const{name,value} = e.target;
         this.setState((prevState)=>{
             return{
                 ...prevState,
                 [name]:value,
             }
         })
     }

     handleSubmit(){

     }


    render(){
const {title,description,images} = this.state;
  
    return(
        <div className="wrap">
            <div className="inner-wrap cart-wrap">
            <Motion incls="fadein">
            <button className="move-btn" onClick={()=>this.props.history.goBack()}>👈🏻  </button>

            <form onSubmit={this.handleSubmit} className="form-styles">
                <h2>Create Task</h2>
                <div className="input-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={title} onChange={(e)=>this.handleChange(e)}  className="form-control" placeholder="Title"/>
                </div>
                <div className="input-group">
                <label htmlFor="Description">Description</label>
                <input type="text" name="description" value={description} onChange={(e)=>this.handleChange(e)}  className="form-control" placeholder="description"/>
                </div>
                <div className="input-group">
                <label htmlFor="Images">images</label>
                <input type="text" name="images" value={images} onChange={(e)=>this.handleChange(e)}  className="form-control" placeholder="description"/>
                </div>
                
                <button className="btn-submit btn" type="submit">Submit</button>
            </form>
            </Motion>
            </div>
        </div>
    )
    }
}
export default CreateForm;