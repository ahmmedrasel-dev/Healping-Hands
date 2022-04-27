import React from 'react';

const Register = () => {

  // const [loginUser, setLoginUser] = useState({
  //   email: '',
  //   password: ''
  // })

  // const [loginError, setLoginError] = useState({
  //   emailError: '',
  //   passwordError: ''
  // })

  // Sign In with Email And Password 
  // const handleEmail = e => {
  //   const emailRex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  //   const validEmail = emailRex.test(e.target.value);
  //   if (validEmail) {
  //     setLoginUser({ ...loginUser, email: validEmail })
  //   } else {
  //     setLoginError({ ...loginError, emailError: 'Invalid Email!' })
  //   }
  // }

  // const handlePassword = e => {
  //   const passwordRex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
  //   const validPassword = passwordRex.test(e.target.value);
  //   if (validPassword) {
  //     setLoginUser({ ...loginUser, password: validPassword })
  //   } else {
  //     setLoginError({ ...loginError, passwordError: 'Weak Password.' })
  //   }
  // }

  return (
    <div>
      <h1>This is Register Pages</h1>
    </div>
  );
};

export default Register;