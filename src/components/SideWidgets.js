import React from 'react';
import './SideWidgets.css';
import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Avatar, IconButton } from '@material-ui/core';

function SideWidgets() {
    return (
        <div className='sideWidgets'>
          <div className='sideWidgets__Icons'>
            <IconButton className="sideWidgets__Icon" >
                    <HomeIcon fontSize='large'/>
                </IconButton>

                <IconButton className="sideWidgets__Icon">
                     <Avatar/>
                </IconButton>

                <IconButton className="sideWidgets__Icon1">
                    <AddOutlinedIcon fontSize='large'/>
                </IconButton>

                <IconButton className="sideWidgets__Icon1">
                    <ExploreOutlinedIcon fontSize='large'/>  
                </IconButton>

                <IconButton className="sideWidgets__Icon1">
                    <GetAppIcon fontSize='large'/>
                </IconButton> 
            </div>                   
        </div>
    )
}

export default SideWidgets
