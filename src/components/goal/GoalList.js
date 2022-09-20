import React, { useState, useEffect } from "react"
import { getGoals, deleteGoal, updateGoal } from "./GoalManager.js"
import { useHistory } from 'react-router-dom'
import {GoalCard} from "./GoalCard"

export const GoalList = () => {
    const history = useHistory()
    const [ goals, setGoals ] = useState([]);

    useEffect(() => {
        getGoals().then(data => setGoals(data))
    }, [])

    const deleteGoal = (id) => {
        deleteGoal(id)
            .then(() => getGoals().then(setGoals));
    }

    return (
        <>
        <div>
        <article className="goals">
            {goals.map(goal=> 
                <GoalCard
                key={goal.id}
                goal={goal}
                deleteGoal={deleteGoal}
                updateGoal={updateGoal} /> 
            )}   
        </article>
        </div> 
        </>
        
    )
}
                    // <section key={`goal--${goal.id}`} className="goal">
                    //     <div className="goal__title">Goal: {goal.title}</div>
                    //     <div className="goal__description">Description: {goal.description}</div>
                    //     <div className="goal__type">Type: {goal.type.title}</div>
                    //     <div className="goal__creator">Created By: {goal.created_by.member.username}</div>
                    //     <button className= "goal_track_button" onClick={()=>{history.push(`/my_goals`)}}> Track Goal</button>
                    //     <button className= "goal_delete_button" onClick={()=>{deleteGoal(goal.id)}}> Delete</button>

                    // </section>