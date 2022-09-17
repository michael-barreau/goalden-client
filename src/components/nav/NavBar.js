import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            {
                (localStorage.getItem("token") !== null) ?
                <>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/goal/new">New Goal</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/my_goals">My Goals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/completed_goals">Completed Goals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/all_goals">All Goals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/buddy_goals">Buddy Goals</Link>
            </li>
            <li className="nav-item">
                        <button id="logoutButton" className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("token")
                                history.push({ pathname: "/login" })
                            }}>Logout</button> 
            </li> </>:
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
        }           </ul>
    )
}