const remoteURL = "http://localhost:8000"

export const getGoalsByUser = (userId) => {
    return fetch(`${remoteURL}/mygoals`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}
