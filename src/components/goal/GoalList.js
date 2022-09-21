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
