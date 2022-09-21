import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
// import { Login } from "./components/auth/Login"
// import { Register } from "./components/auth/Register"
// import {Home} from "./Home.js"
import { GoalForm } from './components/goal/GoalForm.js'
import { UpdateGoalForm } from "./components/goal/UpdateGoalForm.js"
import { GoalList } from "./components/goal/GoalList.js"
import { MyGoalList } from "./components/my_goal/MyGoalList.js"

export const ApplicationViews = ({ token,setToken, user ,setUser }) => {
    
    return (
        <>
        <main style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}>
        <BrowserRouter>
        {/* <Route exact path="/" component={Home} />    */}
        <Route exact path="/goal/new" component={GoalForm} /> 
        {/* <Route path="/goals/edit/:goalId(\d+)" component={UpdateGoalForm}/> */}
        <Route path="/goals/:goalId/edit" component={UpdateGoalForm} />
        <Route exact path="/allgoals" component={GoalList}/>
        <Route exact path="/mygoals" component={MyGoalList} />

        </BrowserRouter>
        </main>
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