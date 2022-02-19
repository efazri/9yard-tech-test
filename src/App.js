import logo from './logo.svg';
import './App.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from 'react';

function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <ProSidebar collapsed={collapsed}>
        <h1 className='text-center'>Hi Recruiter!</h1>
        <Menu iconShape="square">
          <MenuItem >Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    <div>
      <h1>Hello</h1>
    </div>
    </div>
  );
}

export default App;
