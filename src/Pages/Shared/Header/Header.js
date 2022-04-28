import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth)

  const handleLogout = () => {
    signOut(auth);
  }
  return (
    <div className='container mx-auto'>
      <div className='flex py-6'>
        <div className='w-1/4'>
          <Link to='/'><h2>Helping Hands</h2></Link>
        </div>
        <div className='w-3/4 flex justify-end'>
          <Link className='mx-6' to='/'>Home</Link>
          <Link className='mx-6' to='/add-activities'>add activities</Link>
          <Link className='mx-6' to='/events'>Events</Link>
          <Link className='mx-6' to='/blog'>Blog</Link>
          {
            user ?
              <ul>
                {user.displayName}
                <button className='ml-4' onClick={handleLogout}>Logout</button>
              </ul>
              :
              <Link className='mx-6' to='/Login'>Login</Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Header;