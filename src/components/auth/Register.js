import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import "./Auth.css"

export const Register = () => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const username = useRef()
  const bio = useRef()
  const phoneNumber = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const passwordDialog = useRef()
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()
    
    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        // bio: bio.current.value,
        phone_number: phoneNumber.current.value
      }

      registerUser(newUser)
        .then(res => {
          if ("valid" in res && res.valid) {
            localStorage.setItem("token",res.token)
            localStorage.setItem("user",res.userId)
            history.push("/")
          }
        })
    } else {
      passwordDialog.current.showModal()
    }
  }

  return (
    <section className="columns is-centered">
      <form className="column is-two-thirds" onSubmit={handleRegister}>
      <h1 className="title">Goalden</h1>
        <p className="subtitle">Create an account</p>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" ref={firstName} />
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input className="input" type="text" ref={lastName} />
          </div>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" ref={username} />
          </div>
        </div>
 
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" ref={email} />
          </div>
        </div> 

        <div className="field">
          <label className="label">Password</label>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="password" placeholder="Password" ref={password} />
              </p>
            </div>

            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="password" placeholder="Verify Password" ref={verifyPassword} />
              </p>
            </div>
          </div>
        </div>

        {/* { <div className="field">
          <label className="label">Bio</label>
          <div className="control">
            <textarea className="textarea" placeholder="Tell us about yourself..." ref={bio}></textarea>
          </div>
        </div> */}

        <div className="field">
          <label className="label">Phone Number </label>
          <div className="control">
            <textarea className="input" type="text" placeholder="Enter Phone Number" ref={phoneNumber}></textarea>
          </div>
        </div>  

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">Submit</button>
          </div>
          <div className="control">
            <Link to="/login" className="button is-link is-light">Login</Link>
          </div>
        </div>

      </form>
    </section>
  )
}