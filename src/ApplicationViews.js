import React from "react"
import { Route } from "react-router-dom"
// import { Login } from "./components/auth/Login"
// import { Register } from "./components/auth/Register"
import {Home} from "./Home.js"
import { GoalForm } from './components/goal/GoalForm.js'
import { UpdateGoalForm } from "./components/goal/UpdateGoalForm.js"
import { GoalList } from "./components/goal/GoalList.js"
import { MyGoalList } from "./components/my_goal/MyGoalList.js"
import { BuddyGoalList } from "./components/buddy/BuddyList.js"

export const ApplicationViews = () => {
    
    return (
        <>
        <main style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}>
   
        <Route exact path="/" component={Home} />   
        <Route exact path="/goal/new" component={GoalForm} /> 
        {/* <Route path="/goals/edit/:goalId(\d+)" component={UpdateGoalForm}/> */}
        <Route path="/goals/:goalId/edit" component={UpdateGoalForm} />
        <Route exact path="/allgoals" component={GoalList}/>
        <Route exact path="/mygoals" component={MyGoalList} />
        <Route exact path="/buddygoals" component={BuddyGoalList} />
       
        </main>
        </>
    )
}

// <Link className="navbar__link" to="/goals/my_goals">My Goals</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/completedgoals">Completed Goals</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/goals">All Goals</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/buddygoals">Buddy Goals</Link>