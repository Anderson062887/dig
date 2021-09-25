import React,{Component} from "react";
import {Link,Redirect} from "react-router-dom";
import {Consumer }from "../../Data";
import {CreateUser} from "../../utils/Fech";
import {Validator,NameStrategy,EmailStrategy,PasswordStrategy} from "../../utils/validator";
import Warning from "../warning";

const nameStra = new NameStrategy();
const emailStra = new EmailStrategy();
const passStra = new PasswordStrategy();
const nameValidator = new Validator(nameStra);
const emailValidator = new Validator(emailStra);
const passValidator = new Validator(passStra )

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {  
            name:"",
            last:"",
            email:"",
          password:"",
          confirmpassword:"",
          error:null,
    }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        const {name,last,email,password,confirmpassword} = this.state;
        const {history} = this.props;

        if((nameValidator.validate(name) && nameValidator.validate(last) )&& emailValidator.validate(email)){
             
            CreateUser({name,last,email,password})
            .then(user => {
                console.log(user)
                if (user.register) {
                  history.push("/login")
                    
                }
                this.setState({error:user})

            }).catch(e =>{
                console.log(e)
                console.log(e)
            })
        }
  

        this.setState({  
            name:"",
            last:"",
            email:"",
          password:"",
          confirmpassword:"",
    })
    }
    handleChange(e){
        
        const {name,value} = e.target;
        this.setState((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    handleError(){
     clearInterval(this.handle);
     this.setState({error:null})
    }

componentDidUpdate(prevProps,prevState){
    if(this.state.error){
    this.handle = setTimeout(()=>{
      this.handleError()
       },1500)
    }
  
    
}

    render(){
        // console.log(this.props)
        const {error} = this.state;
       return( <Consumer>
                  {({user})=>{
                      if(user){
                       return <Redirect to="/profile" />;
                      }

                        return(

                            <div className="wrap align-center">
                                
                            <form onSubmit={this.handleSubmit} className="form-styles">
                            {error !== null?<Warning msg={error.message}/>:null}
                                <h2>Register</h2>
                                <input className="form-control" type="text" placeholder="Name"  name="name" value={this.state.name} onChange={this.handleChange}  required/>
                                <input className="form-control" type="text" placeholder="last"  name="last" value={this.state.last} onChange={this.handleChange} required />
                                <input className="form-control" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                <input className="form-control" type="text" placeholder="password"  name="password" value={this.state.password} onChange={this.handleChange} required/>
                                <input className="form-control" type="text" placeholder="confirm password"  name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} required />
                                <button className="btn-submit btn" type="submit">Submit</button>
                                <p>already have an account go to <Link className="subcess"  to="/login">Log in</Link></p> 
                            </form>
                            </div>
                        )

                  }}
                
        </Consumer>)
        

        
      
    }
}

export default Register;