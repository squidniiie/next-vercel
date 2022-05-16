import React, { useState } from 'react';
import { useAuth } from '../../context/index';
import { useRouter } from 'next/router';
const SignIn = () => {
  const router = useRouter();
  const { user, signup } = useAuth();
  // console.log(user);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
      router.push('/user/dashboard');
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
  };
  return (
    <form className='auth-form' onSubmit={registerHandler}>
      <div className='auth-title'>Next Chat</div>
      <div>
        <input
          className='text-input'
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          placeholder='Email'
          type='text'
        />
      </div>
      <div>
        <input
          className='text-input'
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
          placeholder='Password'
          type='password'
        />
      </div>
      <button type='submit' className='submit-button'>
        Sign Up
      </button>
      <button
        className='p-2 my-2 w-full bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700'
        type='button'
        onClick={() => router.push('/')}
      >
        Member Signin
      </button>
    </form>
  );
};
export default SignIn;
