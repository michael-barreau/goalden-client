import React, { useEffect, useState } from "react"
import { getGoalsByUserId, deleteGoal, updateGoal } from "../goal/GoalManager"
import { MyGoalCard } from "./MyGoalCard";
import "./../goal/GoalCard.css"

export const MyGoalList = () =>{
    const [ goals, setGoals ] = useState([]);

    useEffect(() => {
        getGoalsByUserId().then(data => setGoals(data))
    }, [])
    
    const deleteGoal = (id) => {
        deleteGoal(id)
            .then(() => getGoalsByUserId().then(setGoals));
    }
    
    return(
        <>
    <div>
        <article className="my_goals">
            {goals.map(goal=> 
                <MyGoalCard
                key={goal.id}
                goal={goal}
                deleteGoal={deleteGoal}
                updateGoal={updateGoal}
                 /> 
            )}   
        </article>
    </div>
    </>
    )
}
