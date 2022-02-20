import './App.css';
import React from 'react';
import { MobileNav, Sidebar } from './components';
import Views from './views/index';

function App() {
  return (
      <div>
        <MobileNav />
        <div className='flex flex-row h-[100vh] w-full 2xl:container 2xl:mx-auto mt-5 md:mt-0'>
          <div className="hidden lg:block" >
            <Sidebar/>
          </div>
          <Views />
        </div>
      </div>
  );
}

export default App;