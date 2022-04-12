import React,{Component} from "react";
import Warning from "../warning";
import {Validator,NameStrategy,EmailStrategy} from "../../utils/validator";
import {signin,getMyProfile} from "../../utils/Fech";
import {Link,Redirect} from "react-router-dom";
import {Consumer} from "../../Data";

const emailStr = new EmailStrategy();
const nameStr = new NameStrategy();
// const Inpu = new Validator();
const emailValidator = new Validator(emailStr)
const nameAndLastValidator = new Validator(nameStr)

class Login extends Component{
    constructor(){
        super()
        this.handle = null;
        this.state = {
            email:"",
            password:"",
                error:{
                    errorVal:false,
                    errortype:"",
                },
                user:false,
            }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDataFromDb = this.getDataFromDb.bind(this);

    }


    componentWillUnmount(){
        clearTimeout(this.handle)
    }
    handleError(){
        clearTimeout(this.handle)
        this.setState({error:{errorVal:false,errortype:""}});
    }

   async  getDataFromDb(email,password){
                  try {
       //get token from db them get user profile  using the token
                    const user = await signin({email,password}); 
                          if(user.auth){
                        const userData = await getMyProfile(user);
                        //set app global state, setting user and token then set localstorage and redirect
                            this.setUser(userData,user)
                            localStorage.setItem("user",JSON.stringify(user));
                            this.props.history.push("/profile")
                         }
                
                } catch (error) {
                    console.log("error")
                //    console.log(error)
                }

    }

    
      handleSubmit(e){
        
        e.preventDefault();
        const {email,password} = this.state;
        if ((!email || !password )||
        (!emailValidator.validate(email) || !nameAndLastValidator.validate(password) )) {
             this.handle = setTimeout(()=>this.handleError(),2000)
             this.setState({error:{errorVal:true,errortype:"email"}});
            return;
        }
        this.getDataFromDb(email,password);
   
            this.setState((prev)=>{
                 return{
                    email:"",
                    password:"",
                 }
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

 

    render(){
        const {errorVal,errortype}  = this.state.error;
        const {from} = this.props.location.state || {from:{pathname:"/"} };
       
                    return(
                            <Consumer>
                             {({setUser,user,isAuth})=>{

                                 this.setUser = setUser;
                                 if(isAuth){
                                    return <Redirect to={from} />;
                                   }
                                 return(
                                    <div className="wrap align-center ">
                                    <form onSubmit={this.handleSubmit} className="form-styles">
                                    {errorVal && errortype === "email"?<Warning msg="please check you credential"/>:null}
                                        <h2>Log in</h2>
        
                                        <input className="form-control" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} disabled={errorVal?true:false}/>
                                        <input className="form-control" type="text" placeholder="password"  name="password" value={this.state.password} onChange={this.handleChange} disabled={errorVal?true:false}/>
                                        <button className="btn-submit btn" type="submit">Submit</button>

                                        <p>if you don't an account go to <Link className="subcess" to="/register">Register</Link></p> 
                                    </form>    
                                    </div>
 

                                 )
                             }}
                            
                        

                            </Consumer>
                        )
      }
}

export default Login;