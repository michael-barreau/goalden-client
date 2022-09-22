import React, {useState} from "react";
import { useHistory, useParams, Link } from "react-router-dom"
import {  updateGoal, deleteGoal, getGoals, createGoalBuddy } from "./GoalManager";
import "./GoalCard.css"

export const GoalCard = ({ goal, handleDeleteGoal}) => {
    const userId = localStorage.getItem("user")
    const history = useHistory()

    const handleClickTrackGoal = () => {

        const newGoalBuddy = {
            goal: parseInt(goal.id),
            member:parseInt(goal.created_by.member.id)
        }
        createGoalBuddy(newGoalBuddy)
    }
    return (
        <section key={`goal--${goal.id}`} className="goal">
         <div className="goal__title">Goal:  {goal.title}</div>
         <div className="goal__description">Description: {goal.description}</div>                   
          <div className="goal__type">Type: {goal.type.title}</div>
         <div className="goal__creator">Created By: {goal.created_by.member.username}</div>
        <div className="buttons">
        {/* {goal.created_by.id === userId &&<Link to={`/goals/${goal.id}/edit`}><button className="cardBtn">Edit</button></Link>} */}
        <Link to={`/buddygoals`}><button onClick={() => {handleClickTrackGoal()}} className="cardBtn">Track</button></Link>
 
          
        {/* {goal.created_by.id === userId &&<button 
            className="cardBtn"
            onClick={() => {
            handleDeleteGoal(goal.id)}}>
            Delete
        </button>}
         */}
    </div>
    </section>
    
    )
}