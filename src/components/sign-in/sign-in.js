import React, { useContext } from 'react'
import { useState } from 'react'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'
import { UserContext } from '../../context/user.context'


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {currentUser, setCurrentUser} = useContext(UserContext)

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error)
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn