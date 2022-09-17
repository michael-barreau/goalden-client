import React, { useState, useEffect } from "react"
import { getGoalsByUser, getGoalTypes } from "./GoalManager.js"
import { useHistory } from 'react-router-dom'

export const MyGoal = (userID) => {
    const history = useHistory()
    const [ goals, setGoals ] = useState([]);

    useEffect(() => {
        getGoalsByUser().then(data => setGoals(data))
    }, [])

    useEffect(() => {
        getGoalTypes()
    }, [])

    return (
        <article className="goals">
            
            {
                goals.map(goal => {
                    return <section key={`goal--${goal.user.id}`} className="goal">
                        <div className="goal__title">Goal: {goal.title}</div>
                        <div className="goal__description">Description:{goal.description}</div>
                        <div className="goal__type">Type: {goalType.title}</div>
                        <div className="goal__check_in_frequency">Check In: {goal.check_in_frequency}</div>


                        <div className="goal__creator">Created By: {goal.member}</div>
                        <button className= "game_edit_button" onClick={()=>{history.push(`/goals/$/(goal.id)/edit`)}}>Edit</button>
                    </section>
                })
            }
            
            <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
            history.push({ pathname: "/completed_goals" })
            }}></button>

            <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
            history.push({ pathname: "/my_goals" })
            }}>Edit</button> 
            
            <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
            history.push({ pathname: "/completed_goals" })
            }}>Done</button> 
            
        </article> 
    )
}