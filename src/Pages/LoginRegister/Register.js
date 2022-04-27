import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Register = () => {

  const [userRegister, setUserRegister] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [userRegisterError, setUserRegisterError] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  })

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  // Sign Up with Email And Password
  const handleEmail = e => {
    const emailValidTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailValidTest.test(e.target.value);
    console.log(validEmail)
    if (validEmail) {
      setUserRegister({ ...userRegister, email: e.target.value })
      setUserRegisterError({ ...userRegisterError, emailError: '' })
    } else {
      setUserRegisterError({ ...userRegisterError, emailError: 'Invalid Email.' })
      setUserRegister({ ...userRegister, email: '' })
    }
  }

  const handlePassword = e => {
    const passwordTest = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,16}$/;
    const strongPassword = passwordTest.test(e.target.value);
    if (strongPassword) {
      setUserRegister({ ...userRegister, password: e.target.value })
      setUserRegisterError({ ...userRegisterError, passwordError: '' })
    } else {
      setUserRegisterError({ ...userRegisterError, passwordError: 'Your Passowrd is to week.' })
      setUserRegister({ ...userRegister, password: '' })
    }
  }

  const handleConfirmPassword = e => {
    const confirmPass = e.target.value
    if (userRegister.password !== confirmPass) {
      setUserRegisterError({ ...userRegisterError, confirmPasswordError: 'Confirmation Password not Match.' })
    } else {
      setUserRegister({ ...userRegister, confirmPassword: e.target.value })
      setUserRegisterError({ ...userRegisterError, confirmPasswordError: '' })
    }
  }


  const handleSubmit = e => {
    e.preventDefault()
    if (userRegister.password !== userRegister.confirmPassword) {
      toast.error('Confirm Password not match.')
    } else {
      createUserWithEmailAndPassword(userRegister.email, userRegister.password)
    }
  }

  if (user) {
    toast.success('User Create Successfully.')
  }


  const handleGogleLogin = e => {
    console.log(e)
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  return (
    <div>
      <div className='text-center my-2'>
        <h2 className='text-4xl text-cyan-500'>Helping Hands</h2>
        <p className=''>Please login with your email and Password.</p>
      </div>
      <div className='w-2/4 h-82 m-auto flex flex-col justify-center bg-slate-300 border-2 rounded-3xl'>
        <form className='w-3/4 mx-auto mt-8' onSubmit={handleSubmit}>
          <h2 className='text-center text-4xl mb-2'>Register</h2>
          <input className='block w-full p-3 rounded-md text-xl' type="email" name="email" id="" placeholder='Email' onChange={handleEmail} />

          {
            userRegisterError?.emailError && <strong className='text-red-500'>{userRegisterError.emailError}</strong>
          }

          <input className='block w-full p-3 my-4 rounded-md text-xl' type="password" name="password" id="" placeholder='Password' onChange={handlePassword} />

          {
            userRegisterError?.passwordError && <strong className='text-red-500'>{userRegisterError.passwordError}</strong>
          }

          <input className='block w-full p-3 my-4 rounded-md text-xl' type="password" name="confimrPassword" id="" placeholder='Password Confirmation' onChange={handleConfirmPassword} />

          {
            userRegisterError?.confirmPasswordError && <strong className='text-red-500'>{userRegisterError.confirmPasswordError}</strong>
          }

          <button className='w-full bg-orange-500 p-3 mb-4 rounded-md text-xl text-white'>Login</button>
          <p className='text-center mb-2'>Already Have Account? <Link className='underline text-blue-400' to='/login'>Login.</Link></p>
        </form>
        <div className='flex justify-center mb-8'>
          <button className='bg-slate-100 w-3/4 p-3 rounded-full' onClick={handleGogleLogin}><FcGoogle className='inline text-2xl mr-3' />Continue with Google</button>
        </div>
      </div>

    </div>
  );
};

export default Register;