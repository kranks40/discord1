import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SideWidgets from './SideWidgets';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {Avatar, IconButton } from '@material-ui/core';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from '../utils/firebase';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot((snapshot) => 
            setChannels(snapshot.docs.map((doc) => ({
                id: doc.id,
                channel: doc.data()
            }))
        ));
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt('Please enter channel name');

        if(channelName) {
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    };

    return (
        
        <div className='sidebar'>
            <SideWidgets/>
            <div className="sidebar__top">
                <h3>Clever Programmer</h3>
                <IconButton className='sidebar__Icon'>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                <IconButton className='sidebar__Icon'>
                    <ExpandMoreIcon/>
                </IconButton>
                <h4>TEXT CHANNELS</h4> 
                    </div>
                <IconButton className='sidebar__addChannel'>
                    <AddIcon onClick={handleAddChannel}/>
                </IconButton>
                  </div>

                <div className="sidebar__channelList">
                    {channels.map(({ id, channel}) => (
                        <SidebarChannel
                        key={id}
                        id={id}
                        channelName={channel.channelName}
                        />
                    ))}                   
                </div>  
                </div>  

                <div className="sidebar__voice">                    
                        <SignalCellularAltIcon className='sidebar__signalIcon' fontSize='large'/>                    
                <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                </div>
                    
                    <div className='sidebar__phone'>
                    <IconButton className='sidebar__phoneIcon'>
                        <PhoneIcon/>
                    </IconButton>
                   
                    </div>                   
                </div> 
                <div className="sidebar__buttons">
                        <IconButton className='sidebar__buttonIcons'>
                             <VideocamIcon/>
                        </IconButton>

                        <IconButton className='sidebar__buttonIcons'>
                            <ScreenShareOutlinedIcon/>
                        </IconButton>                        
                    </div>  

                     <div className="sidebar__profile">
                         <Avatar className='sidebar__avatar' onClick={() => auth.signOut()} src={user.photo}/>

                         <div className="sidebar__profileInfo">
                             <h3>{user.displayName}</h3>
                             <p>#{user.uid.substring(0, 5)}</p>
                         </div>

                         <div className="sidebar__profileIcon">
                             <IconButton className='sidebar__profileIcons'>
                                 <MicNoneOutlinedIcon/>
                             </IconButton>

                             <IconButton className='sidebar__profileIcons'>
                                 <HeadsetOutlinedIcon/>
                             </IconButton>

                             <IconButton className='sidebar__profileIcons'>
                                 <SettingsOutlinedIcon/>
                             </IconButton>
                             
                             
                             

                         </div>
                    </div>                            
              </div>
    );
}

export default Sidebar;
