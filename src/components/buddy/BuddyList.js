import React, { useState, useEffect } from "react"
import { getGoals, deleteGoal } from "../goal/GoalManager.js"
import {BuddyGoalCard} from "./BuddyGoalCard"

export const BuddyGoalList = () => {
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
                <BuddyGoalCard
                key={goal.id}
                goal={goal}
                deleteGoal={deleteGoal}
               /> 
            )}   
        </article>
        </div> 
        </>
        
    )
}
