import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {createGoal, getGoalTypes} from './GoalManager.js'

export const GoalForm = () => {
    const history = useHistory()
    const [goalTypes, setGoalTypes] = useState([])
    
  
    // const {checkInFrequency, setCheckInFrequency}= useState([])
    
    // const editMode = goalId ? true : false

    const [currentGoal, setCurrentGoal] = useState({
        title: "",
        description: "",
        type: 0
    })
    
    console.log(localStorage.getItem("user"))
    useEffect(() => {
        getGoalTypes().then(res=>setGoalTypes(res))
    }, []);
    console.log(goalTypes)


    // useEffect(()=>{
    //     if(goalId){
    //         getGoalTypes(parseInt(goalId)).then(res => setCurrentGoal(res))
    //     }
    //     },[goalId]);

    // const handleControlledInputChange = (event) => {
        
    //     const newGoal = Object.assign({}, goal)          // Create copy
    //     newGoal[event.target.name] = event.target.value    // Modify copy
    //     setGoal(newGoal)                                 // Set copy as new state
    // }

    // useEffect(() => {
    //     if (editMode) {
    //         getGoalById(goalId).then((res) => {
    //             setGoal(res)})
    //     }}, [])

    // const constructNewGoal = () => {
    //         const goal_id = parseInt(goal.location_id)
    //         {
    //             if (editMode) {
    //                 // PUT
    //                 updateGoal({
    //                     title: goal.id,
    //                     description:goal.description,
    //                     type: goal.type
    //                 })
    //                     .then(() => history.push("/my_goals"))
    //             } else {
    //                 // POST
    //                 addGoal({
    //                     title: goal.id,
    //                     description:goal.description,
    //                     type: goal.type    //                 })
    //                     .then(() => history.push("/my_goals"))
    //             }
    //         }
    //     }
    


    const changeGoalState = (event) => {
		const newGoalState = { ...currentGoal }
        newGoalState[event.target.name] = event.target.value
		setCurrentGoal(newGoalState)
	}

    const handleSubmit = e =>{

        e.preventDefault()
        const goal = {
            title: currentGoal.title,
            description: currentGoal.description,
            type: parseInt(currentGoal.type)
        }

    createGoal(goal)
        .then(()=> history.push("/mygoals"))
    }
    
    return (
        <form className="goalForm">
            <h2 className="goalForm__title">Register New Goal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" 
                        name="title" 
                        required autoFocus className="form-control"
                        value={currentGoal.title}
                        onChange={changeGoalState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" 
                         name="description" 
                         required autoFocus className="form-control"
                         value={currentGoal.description}
                         onChange={changeGoalState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="goalType">Goal Type: </label>
                    <select 
                        type="text"
                        className="form-control"
                        name="type" 
                        id="type"
                        required 
                        value={goalTypes.title}
                        onChange={changeGoalState} >
                        <option value="0">Please select ...</option>
                            {goalTypes.map(goalType => (
                            <option key={goalType.id} value={goalType.id}>{goalType.title}</option>)
                            )}
                    </select> 
        
                </div>

            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const goal = {
                        title: currentGoal.title,
                        description: currentGoal.description,
                        type: (currentGoal.type),
                         }

                    // Send POST request to your API
                    createGoal(goal)
                        .then(() => history.push("/mygoals"))
                }}
                className="btn btn-primary">Create Goal</button>
        </form>
    )
            }
