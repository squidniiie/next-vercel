import React from 'react';
import { SignOut } from '../../components/auth/SignOut';
import { useAuth } from '../../context';
import Header from '../../components/layout/Header';
import Main from '../../components/user/Main';
import Head from 'next/head';

const Dashboard = () => {
  const { user } = useAuth();
  const user_data = user
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <SignOut />
      {user_data.email !== null ? (
        <div className='bg-gray-300 mx-20 flex justify-end'>
          <Main user_data={user_data} />
        </div>
      ) : (<h1>No User </h1>)}
    </div>
  )
};

export default Dashboard;
