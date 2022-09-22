import React, { useState, useEffect } from "react"
import { getGoalsByUserId, getGoals} from "../goal/GoalManager"
import { deleteGoal } from "../goal/GoalManager.js"
import { useHistory, Link } from 'react-router-dom'


export const BuddyGoalCard = ({buddyGoal, deleteBuddyGoal}) => {
    
    return(
        <>
        <section key={`goal--${buddyGoal.id}`} className="goal">
        <div className="goals">
        <div className="goal__title">Goal: {buddyGoal.goal.title}</div>
        <div className="goal__description">Description:{buddyGoal.goal.description}</div>
         <div className="goal__phone_number">Phone Number: {buddyGoal.member.phone_number}</div> 
         <div className="goal__creator">Created By: {buddyGoal.member.member.username}</div> 
         <button className="cardBtn"onClick={() => {deleteBuddyGoal(buddyGoal.id)}}>Untrack</button>
        </div>
    </section>
        </>
    )

{/* //     return (
//         <article className="goals"> */}
            
//             {
//                 goalUsers.map(goal => {
//                     return <section key={`goal--${goal.id}`} className="goal">
//                         <div className="goal__title">Goal: {goal.title}</div>
//                         <div className="goal__description">Description:{goal.description}</div>
//                         <div className="goal__type">Type: {goal.type.title}</div>
//                         <div className="goal__creator">Created By: {goal.created_by.member.username}</div>
//                     </section>
//                 })
//             }

            
//             <button
//                 className="cardBtn"
//                 onClick={() => {
//                 history.push(`goals/edit/${goal.id}`)}}>
//                 Edit
//             </button>
          
//             <button 
//                 className="cardBtn"
//                 onClick={() => {
//                 handleDeleteGoal(goal.id)}}>
//                 Delete
//             </button>

{/*         
            <button
                className="cardBtn"
                onClick={() => {
                history.push(`goals/edit/${goal.id}`)}}>
                Edit
            </button>
           */}
            {/* <button 
                className="cardBtn"
                onClick={() => {
                handleDeleteGoal(goal.id)}}>
                Delete
            </button> */}
            
        
            
//         </article> 
//     )
 }