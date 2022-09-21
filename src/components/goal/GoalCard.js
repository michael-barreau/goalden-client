import React, {useState} from "react";
import { useHistory, useParams, Link } from "react-router-dom"
import {  updateGoal, deleteGoal, getGoals } from "./GoalManager";
import "./GoalCard.css"

export const GoalCard = ({ goal}) => {

    const history = useHistory()
    const params = useParams()
    
    const [goalId, setGoalId] = useState(parseInt(params.goalId))
    
    const handleDeleteGoal = () => {
        deleteGoal()
            .then(() => getGoals().then(setGoalId));
    }
    return (
        <section key={`goal--${goal.id}`} className="goal">
         <div className="goal__title">Goal:  {goal.title}</div>
         <div className="goal__description">Description: {goal.description}</div>                   
          <div className="goal__type">Type: {goal.type.title}</div>
         <div className="goal__creator">Created By: {goal.created_by.member.username}</div>
        <div className="buttons">
        <Link to={`/goals/${goal.id}/edit`}><button className="cardBtn">Edit</button></Link>
        <Link to={`/buddygoals/${goal.id}`}><button className="cardBtn">Track</button></Link>

        
        
            {/* <button
                className="cardBtn"
                onClick={() => {
                history.push(`goals/edit/id`)}}>
                Edit
            </button> */}
          
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