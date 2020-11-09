import { IconButton } from '@material-ui/core';
import React from 'react';
import './ChatHeader.css';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';

function ChatHeader({ channelName }) {
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <span className='chatHeader__hash'>#</span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                <IconButton className='chatHeader__rightIcons'>
                    <NotificationsNoneOutlinedIcon/>
                </IconButton>

                <IconButton className='chatHeader__rightIcons'>
                    <EditLocationIcon/>         
                </IconButton>

                <IconButton className='chatHeader__rightIcons'>
                    <PeopleAltIcon/>
                </IconButton>

                <div className="chatHeader__search">
                    <input placeholder='Search'/>
                    <SearchIcon/>
                </div>

                <IconButton className="chatHeader__searchIcons">
                    <InboxIcon/>
                </IconButton>

                <IconButton className="chatHeader__searchIcons">
                    <HelpOutlineIcon/>
                </IconButton>


            </div>
        </div>
    );
}

export default ChatHeader;
