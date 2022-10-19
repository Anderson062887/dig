import {Motion} from "./Motion"
import React from "react";
import {Prompt} from "react-router-dom";
import {addTasks} from "../utils/Fech";


 class CreateForm extends React.Component{
     constructor(props){
         super(props);
         this.state ={
             title:"",
             description:"",
             images:[],
             isBlocking:false,
             file:"",

         }
         this.handleSubmit = this.handleSubmit.bind(this);
     }



     handleChange({target}){
         console.log(target.form)
        // make array of input of the form
        // get array of input that are not equal to null
        //make var n > 0 when an input has value in it
        const blocking  = Array.from(target.form.children)
       .reduce((ar,i)=>i.lastElementChild !== null?[...ar,i.lastElementChild]:ar,[])
       .reduce((n,inp)=>(inp.value.length > 0? ++n:n),0) > 0;
      
    //    const blocking = listOfImput.reduce((n,inp)=>(inp.value.length > 0? ++n:n),0) > 0;

         const{name,value} = target;
         
         this.setState((prevState)=>{
             return{
                 ...prevState,
                 isBlocking:blocking,
                 [name]:value,
             }
         })
     }
     handleFile(e){
         const [file] = e.target.files;
         e.target.value = "";
         this.setState((prevState)=>{
             return{
                 ...prevState,
                 images:[...prevState.images,file]
             }
         })
        

     }
     resetFile(e){
        const [,...rest] = this.state.images.reverse();
        const list = rest.reverse();
            this.setState((prevState)=>{
                return{
                    ...prevState,
                    images:[...list],
                }
            })
     }

     handleSubmit(e){
         console.log("try to submit")
            e.preventDefault();
            const {  title,
            description,
            images} = this.state;
           
            addTasks({title,description,images})
            this.setState(()=>{
                return{
                    title:"",
                    description:"",
                    images:[],
                    isBlocking:false
                }
            })
     
     }


    render(){
        //handle goes on images input
        //onChange={(e)=>this.handleChange(e)} 
     

const {title,description,images,isBlocking} = this.state;
  
    return(
        <div className="wrap">
            <div className="inner-wrap cart-wrap">
            <Motion incls="fadein">
            <button className="move-btn" onClick={()=>this.props.history.goBack()}>👈🏻  </button>

            <form onSubmit={this.handleSubmit} className="form-styles">
                <h2>Create Task</h2>
                <Prompt 
                when={isBlocking}
                message="Do you want to navegate away from this form?"/>

                <p>{isBlocking === true && "the form is not empty"}</p>

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
                <input type="text" name="images" value={images.length > 0?images.map(f => f.name):""}  className="form-control" placeholder="enter images separate by a coma" disabled={true}/>
                </div>
            
                
                {/* <label htmlFor="fileName">files ＃{images.length}</label > */}
                <div style={{display:"flex",border:"1px solid"}}>
                     {images.length > 0 && <span onClick={(e)=>this.resetFile(e)}>delete image ✖️</span>}
                <label htmlFor="fileName">choose image 🔘 </label >
                <input style={{visibility: "hidden "}} type="file" accept="image/*" id="fileName" onChange={(e)=>this.handleFile(e)}/>
               
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