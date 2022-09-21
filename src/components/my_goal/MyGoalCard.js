import React, { useState, useEffect } from "react"
import { getGoalsByUserId, getGoals} from "../goal/GoalManager"
import { deleteGoal } from "../goal/GoalManager.js"
import { useHistory, Link } from 'react-router-dom'


export const MyGoalCard = ({goal}) => {
    const history = useHistory()
    const [ goalUsers, setGoalUsers ] = useState([]);
    // const [goal, setGoals] =useState ({})
    const [GoalByUserId, setGoalByUserId] = useState([])
    
    const handleDeleteGoal = (goalId) => {
        deleteGoal(goalId)
            .then(() => history.push("/allgoals"))
    }

    useEffect(() => {
        getGoalsByUserId().then(data => setGoalByUserId(data))
        console.log(goal)
    }, [])

    // useEffect(() => {
    //     getGoals().then(data => setGoals(data))
    // }, [])
    
    return(
        <>
        <div className="goals">
        <div className="goal__title">Goal: {goal.title}</div>
        <div className="goal__description">Description:{goal.description}</div>
         <div className="goal__type">Type: {goal.type.title}</div> 
         <div className="goal__creator">Created By: {goal.created_by.member.username}</div> 
         <Link to={`/goals/${goal.id}/edit`}><button className="cardBtn">Edit</button></Link>
        </div>

{/*         
            <button
                className="cardBtn"
                onClick={() => {
                history.push(`goals/edit/${goal.id}`)}}>
                Edit
            </button>
           */}
            <button 
                className="cardBtn"
                onClick={() => {
                handleDeleteGoal(goal.id)}}>
                Delete
            </button>


        </>
    )

//     return (
//         <article className="goals">
            
//             {
//                 goalUsers.map(goal => {
//                     return <section key={`goal--${goal.id}`} className="goal">
//                         <div className="goal__title">Goal: {goal.title}</div>
//                         <div className="goal__description">Description:{goal.description}</div>
//                         <div className="goal__type">Type: {goal.type.title}</div>
//                         <div className="goal__creator">Created By: {goal.created_by.member.username}</div>
//                     </section>
//                 })
//             }

            
//             <button
//                 className="cardBtn"
//                 onClick={() => {
//                 history.push(`goals/edit/${goal.id}`)}}>
//                 Edit
//             </button>
          
//             <button 
//                 className="cardBtn"
//                 onClick={() => {
//                 handleDeleteGoal(goal.id)}}>
//                 Delete
//             </button>
            
        
            
//         </article> 
//     )
 }