import React from 'react'
import { useState } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-up.styles.scss';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      createUserProfileDocument(user, {displayName});
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error)
    }
  };

  const handleChange = event => {
    const {name, value} = event.target;
    if(name === 'displayName') {
      setDisplayName(value);
    }
    else if(name === 'email') {
      setEmail(value);
    }
    else if(name === 'password') {
      setPassword(value);
    }
    else {
      setConfirmPassword(value);
    }
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required ></FormInput>
        <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required ></FormInput>
        <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required ></FormInput>
        <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required ></FormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp