import React, { useState } from 'react';
import { useAuth } from '../../context/index';
import { useRouter } from 'next/router';
const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push('/user/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='auth-form'>
      <form onSubmit={loginHandler}>
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
          Login
        </button>
      </form>
      <button
        type='button'
        className='p-2 my-2 w-full bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700'
        onClick={() => router.push('/auth/signup')}
      >
        Create An Account
      </button>
    </div>
  );
};
export default Login;
