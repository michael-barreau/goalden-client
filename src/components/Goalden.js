import {React, useState} from "react"
// import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import { Route, Link} from 'react-router-dom';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const Goalden = () => {
    const [token, setTokenState] = useState(localStorage.getItem('token'))
    const [user, setUserState] = useState(localStorage.getItem('user'))

    const setToken = (newToken) => {
        localStorage.setItem('token', newToken)
        setTokenState(newToken)
      }
    
      const setUser= (user) => {
        localStorage.setItem('user', user)
        setUserState(user)
      }
    return (
    <>
        {/* <BrowserRouter> */}
            <Route render={() => {
                if (token) {
                    return <>
                        <Route>

                            <NavBar token={token} setToken={setToken} setUser={setUser}  />
                            <ApplicationViews token={token} setToken={setToken} user={user} setUser={setUser}/>

                        </Route>
                    </>
                } else {
                    return <Link to="/login" />


                }
            }} />

            <Route path="/login"> <Login token={token} setToken={setToken} setUser={setUser} /> </Route>
            <Route path="/register"> <Register /> </Route>
    </>
  );
}