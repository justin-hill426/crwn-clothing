import React from 'react'
import { useState } from 'react'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import './sign-in.styles.scss'


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  }

  const handleChange = event => {
    const {value, name} = event.target
    if(name==="email") {
      setEmail(value)
    }
    else {
      setPassword(value)
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" handleChange={handleChange} label="email" value={email} required/>
        <FormInput name="password" type="password" handleChange={handleChange} label="password" value={password} required/>
        

        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn