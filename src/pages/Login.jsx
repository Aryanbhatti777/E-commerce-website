import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/form.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const Navigate = useNavigate()

  const HandleLogin = (e) => {
    e.preventDefault()

    localStorage.setItem("user", email)
    localStorage.setItem("userstatus", "true")

    Navigate("/")
  }

  return (
    <>
    
    <div className="form-container">
      
      <form onSubmit={HandleLogin}>
        <h1 className='lp'>Login Page</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />

        <input type="submit" value="Login" />

        <br />

        <p className="form-lower-text">
          Don't have an account ? <Link to="#">Sign up</Link>
        </p>
      </form>
    </div>
    </>
  )
}

export default Login