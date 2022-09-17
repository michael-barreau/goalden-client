import React from "react"
import { Route, BrowserRouter, HashRouter as Router } from "react-router-dom"
// import { Login } from "./components/auth/Login"
// import { Register } from "./components/auth/Register"
import {Home} from "./Home.js"
import { GoalForm } from './components/goal/GoalForm.js'
import { GoalList } from "./components/goal/GoalList.js"

export const ApplicationViews = ({ token,setToken, user ,setUser }) => {
    
    // const PrivateRoute = ({ children }) => {
    //     return  token? children : <Link to="/login" />;
    // }
    //     return( 
    //     <>
    //         <BrowserRouter>
    //         <Route exact path="/" element={<Home/>} />
    //         {/* <Route exact path="/login" element={<Login setToken={setToken} setUser={setUser}/>} />
    //         <Route exact path="/register" element={Register} />
    //         <Route exact path="/new_goal" element={<NewGoalForm />} /> */}
    //         </BrowserRouter>            
    //     </>
    // )
    return (
        <>
        <BrowserRouter>
        <Route exact path="/" component={Home} />   
        <Route exact path="/goal/new" component={GoalForm} /> 
        <Route path="/goals/edit/:goalId(\d+)" component={GoalForm}/>
        <Route exact path="/all_goals" component={GoalList}/>
        {/* <Route path="/my_goals" component={MyGoals} />  */}
        </BrowserRouter>
        </>
    )
}

// <Link className="navbar__link" to="/goals/my_goals">My Goals</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/completed_goals">Completed Goals</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/goals">All Goals</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/buddy_goals">Buddy Goals</Link>