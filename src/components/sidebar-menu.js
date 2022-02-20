import React from 'react';
import '../App.css';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useNavigate } from 'react-router-dom';

function SidebarMenu() {
    const navigate = useNavigate()

  return (
    <ProSidebar collapsed={false} className="h-100">
        <h1 className='text-center text-2xl mb-12'>Hi Recruiter!</h1>
        <Menu iconShape="square">
            <MenuItem className='font-bold' onClick={() => navigate('/')}>Home</MenuItem>
            <MenuItem className='font-bold' onClick={() => navigate('/active-jobs')}>Active Jobs</MenuItem>
            <MenuItem className='font-bold' onClick={() => navigate('/archived-jobs')}>Archived Jobs</MenuItem>
            <MenuItem className='font-bold' onClick={() => navigate('/settings')}>Settings</MenuItem>          
        </Menu>
    </ProSidebar>
  );
}

export default SidebarMenu;