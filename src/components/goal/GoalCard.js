import React from "react";
import { Link, useHistory } from "react-router-dom"
import "./GoalCard.css"

export const GoalCard = ({ goal, delGame}) => {

    const history = useHistory();

    return (
    <section key={`goal--${goal.id}`} className="goal">
    <div className="goal__title">{goal.title}</div>
    <div className="goal__description">{goal.description}</div>
    <div className="goal__type">{goal.type}</div>
    <div className="goal__check_in_frequency">{goal.check_in_frequency}</div>

    <div className="buttons">
        <Link to={`goal/${goal.id}/update`}><button className="cardBtn">Edit</button> </Link>
        <Link to={`goal/detail/${goal.id}`} ><button className="cardBtn">Details</button> </Link>
        <button 
            className="cardBtn"
            onClick={() => {
                delGoal(goal.id)

            }}>
        Delete
        </button>
    </div>
    </section>
    
    )
}