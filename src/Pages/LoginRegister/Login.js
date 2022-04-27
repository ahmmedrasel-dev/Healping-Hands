import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    hookError,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  // Sign In with Email And Password 
  const handleSubmit = e => {
    e.preventDefault()
    if (email.length !== 0 && password.length) {
      signInWithEmailAndPassword(email, password)
    } else {
      toast.error('Email & Password is empaty.')
    }
  }

  if (user) {
    toast.success('User Login Successfullay');
  }

  // Sign In with Google.

  const handleGogleLogin = () => {
    signInWithGoogle(email, password);
  }

  if (googleUser) {
    toast.success('Sign in User:', googleUser);
  }

  useEffect(() => {
    if (googleError) {
      toast.error(googleError.message)
    }

    if (hookError) {
      toast.error(hookError.message)
    }
  }, [googleError, hookError])


  return (
    <div>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-cyan-500'>Helping Hands</h2>
        <p className=''>Please login with your email and Password.</p>
      </div>

      <div className='w-2/4 h-82 m-auto flex flex-col justify-center bg-slate-300 border-2 rounded-3xl'>
        <form className='w-3/4 mx-auto mt-12' onSubmit={handleSubmit}>
          <input className='block w-full p-3 rounded-md text-xl' type="email" name="" id="" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input className='block w-full p-3 my-4 rounded-md text-xl' type="password" name="" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button className='w-full bg-orange-500 p-3 mb-4 rounded-md text-xl text-white'>Login</button>
          <p className='text-center mb-2'>Don't have Account? <Link className='underline text-blue-400' to='/register'>Create an account.</Link></p>
        </form>
        <div className='flex justify-center mb-12'>
          <button className='bg-slate-100 w-3/4 p-3 rounded-full' onClick={handleGogleLogin}><FcGoogle className='inline text-2xl mr-3' />Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;