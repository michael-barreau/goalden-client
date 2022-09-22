import {React, useState} from "react"
// import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import { Route, Link, Redirect} from 'react-router-dom';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const Goalden = () => {
    // const [token, setTokenState] = useState(localStorage.getItem('token'))
    // const [user, setUserState] = useState(localStorage.getItem('user'))

    // const setToken = (newToken) => {
    //     localStorage.setItem('token', newToken)
    //     setTokenState(newToken)
    //   }
    
    //   const setUser= (user) => {
    //     localStorage.setItem('user', user)
    //     setUserState(user)
    //   }
    return (
    <>
        {/* <BrowserRouter> */}
            <Route render={() => {
                if (localStorage.getItem("token")) {
                    return <>
                        <Route>

                            <NavBar />
                            <ApplicationViews/>

                        </Route>
                    </>
                } else {
                    return <Redirect to="/login" />


                }
            }} />

            <Route path="/login"> <Login  /> </Route>
            <Route path="/register"> <Register /> </Route>
    </>
  );
}