import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getGoalById } from "./GoalManager"
// import "./GoalCard.css"

export const GoalDetails = () => {
    const {goalId} = useParams();

    const [ goalDetail, setGoalDetail ] = useState({
        title: "",
        description: "",
        type: "",
        check_in_frequency: ""
    })

    const loadGoal = () => {
        return getGoalById(goalId)
            .then(data => {
                setGoalDetail(data)
            })
    }

    useEffect(() => {
        loadGoal()
        console.log(goalDetail)
    }, [])

    return (
        <>
        <section>
        <h2>Title:{goalDetail.title}</h2>
        <p>Description: {goalDetail.description}</p>
        <p>Type: {goalDetail.type}</p>
        <p>Check_in_frequency: {goalDetail.check_in_frequency}</p> 
        </section>
        </> 
    )
}