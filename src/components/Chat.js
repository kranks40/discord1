import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Button, IconButton } from '@material-ui/core';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/appSlice'
import { selectUser } from '../features/userSlice'
import db from '../utils/firebase'
import firebase from 'firebase';


function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [ input, setInput ] = useState('');
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        if (channelId) {
        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
        );
        }
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        });

        setInput('');
    }


    return (
        <div className='chat'>
            <ChatHeader channelName={channelName}/>
            <div className="chat__messages">
                {messages.map((message) => (
                    <Message
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    />
                ))}
           
            </div>
                

            <div className="chat__input">
                <AddCircleOutlineOutlinedIcon fontSize='large'/>
                <form>
                    <input value={input} disabled={!channelId} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
                    
                    <Button onClick={sendMessage} disabled={!channelId} className='chat__button' type='submit'>
                            Send Message</Button>
                    
                </form>

                <div className="chat__inputIcons">
                    <IconButton className='chat__Icons'>
                        <CardGiftcardOutlinedIcon fontSize='large'/>
                    </IconButton>

                    <IconButton className='chat__Icons'>
                         <GifOutlinedIcon fontSize='large'/>
                    </IconButton>

                    <IconButton className='chat__Icons'>
                         <EmojiEmotionsOutlinedIcon fontSize='large'/>
                    </IconButton>
                        
                        
                        
                </div>
            </div>
        </div>
    );
}

export default Chat;