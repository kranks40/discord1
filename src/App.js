import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat';
import Discord from './components/Discord';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './utils/firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

useEffect(() => {
  auth.onAuthStateChanged((authuser) => {
    if(authuser) {
      dispatch(login({
        uid: authuser.uid,
        photo: authuser.photoURL,
        email: authuser.email,
        displayName: authuser.displayName,
      }))

    } else {
      dispatch(logout())
    }
  })
}, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
         <Discord/>
        <Chat/>
        </>
      ): (
        <Login/>
      )}
     
    </div>
  );
}

export default App;
