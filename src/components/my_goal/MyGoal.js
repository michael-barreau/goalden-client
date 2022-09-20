import React, { useState, useEffect } from "react"
import { getGoalsByUser } from "./MyGoalManager.js"
import { useHistory } from 'react-router-dom'

export const MyGoalList = () => {
    const history = useHistory()
    const [ goalUsers, setGoalUsers ] = useState([]);

    useEffect(() => {
        getGoalsByUser().then(data => setGoalUsers(data))
    }, [])
    

    return (
        <article className="goals">
            
            {
                goalUsers.map(goal => {
                    return <section key={`goal--${goal.id}`} className="goal">
                        <div className="goal__title">Goal: {goal.title}</div>
                        <div className="goal__description">Description:{goal.description}</div>
                        <div className="goal__type">Type: {goal.type.title}</div>

                        <div className="goal__creator">Created By: {goal.created_by.member.username}</div>
                        <button className= "goal_track_button" onClick={()=>{history.push(`/my_goals`)}}> Goal</button>
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