import React, {useState}from "react";
import { Link, useHistory } from "react-router-dom"
import {  getGoals, deleteGoal } from "./GoalManager";
import "./GoalCard.css"


export const GoalCard = () => {

    const history = useHistory();
    const [goal, setGoal] = useState([]);

    const handleDeleteGoal = (id) => {
        deleteGoal(id).then(() => getGoals().then(setGoal));
      };

    return (
        <section key={`goal--${goal.id}`} className="goal">
         <div className="goal__title">Goal:  {goal.title}</div>
         <div className="goal__description">Description: {goal.description}</div>                   
          <div className="goal__type">Type: {goal.type.title}</div>
         <div className="goal__creator">Created By:{goal.created_by.member.username}</div>
        <div className="buttons">
        <Link to={`/goals/edit/:goalId(\d+)`}><button className="cardBtn">Edit</button></Link>
        <button 
            className="cardBtn"
            onClick={() => {
            handleDeleteGoal(goal.id)}}>
            Delete
        </button>
    </div>
    </section>
    
    )
}