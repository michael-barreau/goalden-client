import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getGoalTypes, updateGoal, getGoalById} from './GoalManager.js'

export const UpdateGoalForm = () => {
    const history = useHistory()
    const [goalTypes, setGoalTypes] = useState([])
    const[goal, setGoal] = useState([])
      

    const [currentGoal, setCurrentGoal] = useState({
        title: "",
        description: "",
        type: 0
    })

    const {goalId} = useParams()
    const [isLoading, setIsLoading] = useState(false);

    // console.log(localStorage.getItem("user"))
    useEffect(() => {
        getGoalTypes().then(res=>setGoalTypes(res))
        getGoalById(goalId).then(res=>setCurrentGoal(res))
    }, []);
    console.log(goalTypes)


    const handleFieldChange = (event) => {
        event.preventDefault()
		const stateToChange = { ...currentGoal }
        stateToChange[event.target.id] = event.target.value
		setCurrentGoal(stateToChange)
	}

        const updateExistingGoal = goal => {
            goal.preventDefault()
            setIsLoading(true);
        
            const editedGoal = {
                    id: goalId,
                    title: currentGoal.title,
                    description: currentGoal.description,
                    type: parseInt(currentGoal.type)
                }
            
            updateGoal(editedGoal, editedGoal.id).then(() =>
      history.push("/"))
          }
        
          useEffect(() => {
            getGoalById()
              .then(goal => {
                setGoal({
                    title: currentGoal.title,
                    description: currentGoal.description,
                    type: parseInt(currentGoal.type)
                })
                setIsLoading(false);
                console.log(goal)
              });
          }, []);
        
          useEffect(() => {
            getGoalTypes()
              .then(goalTypes => {
                setGoalTypes(goalTypes)
                setIsLoading(false);
              });
          }, []);
    
        return (
        <form className="goalForm">
            <h2 className="goalForm__title">Edit Goal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" 
                        id="title"
                        name="title" 
                        required autoFocus className="form-control"
                        value={currentGoal.title}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" 
                         name="description"
                         id="description" 
                         required autoFocus className="form-control"
                         value={currentGoal.description}
                         onChange={handleFieldChange}
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
                        onChange={handleFieldChange} >
                        <option value="0">Please select ...</option>
                            {goalTypes.map(goalType => (
                            <option key={goalType.id} value={goalType.id}>{goalType.title}</option>)
                            )}
                    </select>    
                </div>
            </fieldset>

            <button 
                type="submit"
                disabled={isLoading}
                onClick={updateExistingGoal}
                className="btn btn-submit-edit">Submit Goal
            </button>
        </form>
    )}
            


















// import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { getGoalById, updateGoal } from './GoalManager'

// export const UpdateGoalForm = () => {
//     const history = useHistory();
//     const {goalId} = useParams();
//     const [isLoading, setIsLoading] = useState(true);
//     const [ goal, setGoal ] = useState({
//         title: "",
//         description: "",
//         type: 0 
//     })

//     const loadGoal = () => {
//         getGoalById(goalId)
//             .then(data => {
//                 setGoal(data)
//                 setIsLoading(false);
//                 console.log(data)
//             })
//     }

//     useEffect(() => {
//         loadGoal()
//     }, [])


//     const handleFieldChange = (domGoal) => {
//         const updatedGoal = {...goal}
//         let selectedVal = domGoal.target.value
//         updatedGoal[domGoal.target.name] = selectedVal
//         setGoal(updatedGoal)
//         console.log(updatedGoal)
//     }

//     return (
        
//         <>
//         <form className="goalForm">
//             <h2 className="goalForm__title">Update {goal.title} event</h2>

//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="description">Description: </label>
//                     <input type="text" 
//                         name="title" 
//                         required autoFocus 
//                         className="form-control"
//                         value={goal.description}
//                         onChange={handleFieldChange}
//                         id="title"
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="description">Description: </label>
//                     <input type="description" 
//                         name="description" required
//                         className="form-control"
//                         value={goal.description}
//                         onChange={handleFieldChange}
//                         id="description"
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="type">Type: </label>
//                     <input type="type" 
//                         name="type" required  
//                         className="form-control"
//                         value={goal.type}
//                         onChange={handleFieldChange}
//                         id="type"
//                     />
//                 </div>
//             </fieldset>

//             <button type="submit"
//                 onClick={evt => {
//                     // Prevent form from being submitted
//                     evt.preventDefault()

//                     // Changing to snake case to match back end
//                     const editedGoal = {
//                         title: goal.title,
//                         description: goal.description,
//                         type: goal.type
//                     }

//                     // Send POST request to your API
//                     updateGoal(editedGoal)
//                         .then(() => history.push('/my_goals'))
//                 }}
//                 className="btn btn-primary" 
//                 id="createBtn">Update Goal</button>
//         </form>
//         </>
//     )
// }