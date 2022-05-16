import Login from '../components/auth/Login';
import React from 'react';
import { SignOut } from '../components/auth/SignOut';
import { SignInGmail } from '../components/auth/SignInGmail';
export default function Auth() {
  return (
    <div className='background'>
      <div className='auth-container'>
        <Login />
        <div className='flex flex-row justify-center gap-1'>
          <SignInGmail />
          <SignOut />
        </div>
      </div>
    </div>
  );
}
