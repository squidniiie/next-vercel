import React from 'react';
import ChatBox from '../../components/user/ChatBox';
import { auth, db } from '../../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { addDoc, collection } from '@firebase/firestore';
import getOtherEmail from '../../utils/getOtherEmail';

const Main = ({ user_data }) => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [snapshot, loading, error] = useCollection(collection(db, 'chats'));
  console.log(snapshot);
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(chats);
  const Chat = () => {
    return chats?.map((chat) => (
      <div className='bg-red-400' key={Math.random()}>
        <p>{getOtherEmail(chat.users, user)}</p>
      </div>
    ));
  };
  return (
    <div className='bg-gray-400 rounded-xl p-2 m-6 w-full'>
      <h1 className='text-3xl text-center'>Welcome {user_data.email}</h1>
      <div className='w-1/2 text-right'>
        <div>{Chat()}</div>
        <button className='p-2 my-2 w-full bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700'>
          New Chat
        </button>
        <ChatBox user_data={user_data} />
      </div>
    </div>
  );
};

export default Main;
