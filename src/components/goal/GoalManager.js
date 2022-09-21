const remoteURL = "http://localhost:8000"

export const getGoals = () => {
    return fetch(`${remoteURL}/goals`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())

}

export const getGoalById = (goalId) => {
    return fetch(`${remoteURL}/goals/${goalId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getGoalTypes = () => {
    return fetch("http://localhost:8000/goaltypes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
     })
        .then(response => response.json())
}

// export const getGoalsByUser = (userId) => {
//     return fetch(`${remoteURL}/my_goals`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("token")}`
//         }
//     })
//         .then(response => response.json())
// }

export const getCompletedGoals = (user, goal) => {
    return fetch(`${remoteURL}/completed_goal`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const createGoal = (goal) => {
    return fetch(`${remoteURL}/goals`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(goal)
    })
        
}

export const deleteGoal = (id) => {
    return fetch(`http://localhost:8000/goals/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
}

export const updateGoal = (goal, id) => {
    return fetch(`${remoteURL}/goals/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(goal)
    })
}

export const createGoalBuddy = () => {
    return fetch(`${remoteURL}/goalbuddies`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
}

export const getUserByGoal = (id) => {
    return fetch(`${remoteURL}/allgoals`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getGoalsByUserId = () => {
    return fetch(`${remoteURL}/goals?member_id=${localStorage.getItem("user")}`,{
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }) .then(response => response.json())
}
