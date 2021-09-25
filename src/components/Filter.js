import React,{Component} from "react";
import {TaskCart }from "./taskCart"

export class Filter extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:props.list || [],
            searcString:"",
            showList:props.list,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidUpdate(prevProps,{searcString,list}){
        if(searcString !== this.state.searcString && this.state.searcString.charCodeAt()!== 32){
           this.setState({showList:[...list.map( task => task.title.toLowerCase().includes(this.state.searcString.toLowerCase())? task: false).filter((i)=> i !== false)]})  
        }
        
    }
    handleChange(e){
        const {name,value} = e.target;
     
        this.setState((prev)=>{
               return{
                searcString:value
               }
        })
    }

    render(){
        const {searcString,list,showList} = this.state;

        return(
            <div>
                <div>
                  <input name="searcString" value={searcString} onChange={this.handleChange} placeholder="seach"/>
                </div>

                    <div>                 
                      <h2>ALL TASK</h2>
                      {showList.length > 0 ? showList.map((t)=> <TaskCart key={t._id} {...t} />):<h2>The text ( {searcString} )does't not match any of the tasks title</h2>  }
                   </div>             
            </div>
        )
    }
}