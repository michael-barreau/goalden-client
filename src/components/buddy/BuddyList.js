import React, { useState, useEffect } from "react"
import { getGoals, deleteBuddyGoal, getBuddyGoals } from "../goal/GoalManager.js"
import {BuddyGoalCard} from "./BuddyGoalCard"

export const BuddyGoalList = () => {
    const [ buddyGoals, setBuddyGoals ] = useState([]);

    useEffect(() => {
        getBuddyGoals().then(data => setBuddyGoals(data))
    }, [])

    const handleDeleteBuddyGoal = (id) => {
        deleteBuddyGoal(id)
            .then(() => getBuddyGoals().then(setBuddyGoals));
    }

    return (
        <>
        <div>
        <article className="goals">
            {buddyGoals.map(bg=> 
                <BuddyGoalCard
                key={bg.id}
                buddyGoal={bg}
                deleteBuddyGoal={handleDeleteBuddyGoal}
               /> 
            )}   
        </article>
        </div> 
        </>
        
    )
}
