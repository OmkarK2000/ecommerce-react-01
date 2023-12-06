import { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [errors, setErrors] = useState('')

  const validateForm = () => {
    let error = {};

    if(!name){
      error.name = "Name is required"
    }
    if(!email){
      error.email = "Email is required"
    }else if(!/\S+@\S+\.\S+/.test(email)){
      error.email = "Invalid email"
    }

    if(!password){
      error.password = "Password is required"
    }else if(password.length < 6 ){
      error.password = "Password must be 6 charachter"
    }

    if(!confirmPass){
      error.confirmPass = "Confirm password is required"
    }else if(confirmPass !== password){
      error.confirmPass = "Confirm password is not match with password"
    }

    // console.log(error)
    return error;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationError = validateForm()

    if(Object.keys(validationError).length > 0){
      setErrors(validationError)
      console.log(errors)
    }else{
      console.log("Form submitted")
    }

  }

  return (
    <div className="loginCon">
      <div className="innerDiv">
        <h1>Sign Up</h1><br />
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)} />
          </div>{errors.name}<br />
          <div>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>{errors.email}<br />
          <div>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>{errors.password}<br />
          <div>
            <input type="password" placeholder="Confirm password" value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value)} />
          </div>{errors.confirmPass ? errors.confirmPass : null} <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have Account? <Link to="/login">Login </Link></p>
      </div>
    </div>
  )
}

export default SignUp