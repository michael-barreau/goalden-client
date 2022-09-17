import React, { useState, useEffect } from "react"
import { getGoals } from "./GoalManager.js"
import { useHistory } from 'react-router-dom'

export const GoalList = () => {
    const history = useHistory()
    const [ goals, setGoals ] = useState([]);

    useEffect(() => {
        getGoals().then(data => setGoals(data))
    }, [])

    return (
        <article className="goals">
            
            {
                goals.map(goal => {
                    return <section key={`goal--${goal.id}`} className="goal">
                        <div className="goal__title">Goal: {goal.title}</div>
                        <div className="goal__description">Description:{goal.description}</div>
                        <div className="goal__type">Type: {goal.type}</div>
                        <div className="goal__check_in_frequency">Check In: {goal.check_in_frequency}</div>


                        <div className="goal__creator">Created By: {goal.user}</div>
                        <button className= "goal_track_button" onClick={()=>{history.push(`/buddy_goal`)}}>Track Goal</button>
                    </section>
                })
            }
            
            <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
            history.push({ pathname: "/goal/new" })
            }}>Register New goal</button> 
            
        </article> 
    )
}