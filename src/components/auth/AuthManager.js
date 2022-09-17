import { useHistory } from "react-router-dom"

export const loginUser = (user) => {
    return fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    }).then(res => res.json())
  }
  
  export const registerUser = (newUser) => {
    // const history = useHistory()
    return fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
  }