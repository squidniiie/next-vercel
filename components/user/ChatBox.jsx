import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebase/config';
import { serverTimestamp } from 'firebase/firestore';
const ChatBox = ({ user_data }) => {
  const [message, setMessage] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'chats/${id}/messages'), {
      text: message,
      sender: user_data.email,
      timestamp: serverTimestamp(),
    });
    setMessage('');
  };

  return (
    <div className='bg-gray-100 p-3 rounded-xl m-3'>
      <h1>Messages from {user_data.email}</h1>
      <form onSubmit={sendMessage}>
        <input
          className='bg-white shadow-lg focus:outline-none focus:shadow-outline border  rounded-full py-2 px-4 block w-full appearance-none leading-normal'
          type='text'
          placeholder='Type a message'
          value={message}
          autoComplete='off'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' hidden>
          Send
        </button>
      </form>
      <p>{user_data.timestamp}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatBox;
