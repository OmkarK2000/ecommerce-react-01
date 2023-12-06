import { Link } from "react-router-dom"
import "./Login.css"
import { useState } from "react"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const validateForm = () => {
    const errors = {};

    if(!email) {
      errors.email = "Email is Required"
    }else if(!/\S+@\S+\.\S+/.test(email)){
      errors.email = "Email is Invalid"
    }

    if(!password){
      errors.password = "Password is Required"
    }else if(password.length < 6){
      errors.password = "Password must be 6 characters" 
    }

    console.log(errors)
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()

    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors)
    }else{
      console.log('Form submitted')
    }
  }

  return (
    <div className="loginCon">
      <div className="innerDiv">
        <h1>Login</h1><br />
        <form onSubmit={handleSubmit}>
          <div>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>{errors.email}<br />
          <div>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>{errors.password} <br />
          <button type="submit">Login</button>
        </form>
        <p>Dont have account sign up now?<br /> <Link to="/signUp">Sign up </Link>now.</p>
      </div>
    </div>
  )
}

export default Login