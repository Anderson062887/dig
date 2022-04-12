
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Nav from "./components/Nav";
import {Landing} from "./components/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/Profile";
import AllTaskDisplay from "./components/AllTaskDisplay";
import {Task} from "./components/Task";
import Logout from "./components/auth/Logout";
import {PriveRoute } from "./components/auth/PrivedRoute";
import CreateForm from "./components/CreateTaks";



function App(props) {

  return (
    <div className="App">

       <section className="main-section">
         

          <Router>
          <Nav />
           <Switch>
               {/* <Route render={(match)=> <Nav loc={match} />}/>   */}
               <Route exact path="/" component={Landing} />
               <Route        path="/login" component={Login} />
               <Route        path="/register" component={Register} />
               {/* <Route        path="/logout" render={()=> <Logout> <Redirect to="/login"/> </Logout>} /> */}
               <PriveRoute exact path="/profile" redirectPath="/login" component={Profile}/>
               <PriveRoute   path="/profile/create" redirectPath="/login" component={CreateForm}/>
               <PriveRoute path="/task/all" redirectPath="/login" component={AllTaskDisplay} />
               <PriveRoute path="/task/:id" redirectPath="/login" component={Task} />
                <Route path="*" render={()=> <Redirect to="/login" />} /> 
               {/* <Route        path="/profile" component={Profile} /> */}
               </Switch>
          </Router>

       </section>
    </div>
  );
}

export default App;
