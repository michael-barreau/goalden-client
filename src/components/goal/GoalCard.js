import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom"
import {  updateGoal, deleteGoal } from "./GoalManager";
import "./GoalCard.css"

export const GoalCard = ({ goal}) => {

    const history = useHistory()
    const params = useParams()
    
    const [goalId, setGoalId] = useState(parseInt(params.goalId))
    
    const handleDeleteGoal = (goalId) => {
        deleteGoal(goalId)
            .then(() => history.push("/allgoals"))
    }

    const handleUpdateGoal = (goalId) => {
        updateGoal(goalId)
            .then(() => history.push("/goals/edit/:goalId(\d+)"))
    }

    return (
        <section key={`goal--${goal.id}`} className="goal">
         <div className="goal__title">Goal:  {goal.title}</div>
         <div className="goal__description">Description: {goal.description}</div>                   
          <div className="goal__type">Type: {goal.type.title}</div>
         <div className="goal__creator">Created By:{goal.created_by.member.username}</div>
        <div className="buttons">
        {/* <Link to={`/goals/edit/:goalId(\d+)`}><button className="cardBtn">Edit</button></Link> */}
        
        
            <button
                className="cardBtn"
                onClick={() => {
                handleUpdateGoal(goal.id)}}>
                Edit
            </button>
          
        <button 
            className="cardBtn"
            onClick={() => {
            handleDeleteGoal(goal.id)}}>
            Delete
        </button>

        {/* <button 
            className="cardBtn"
            onClick={() => {
            (goal.id)}}>
            Track
        </button> */}
    </div>
    </section>
    
    )
}