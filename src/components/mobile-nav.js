import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function MobileNav() {
    const [collapse, setCollapse] = useState('hidden');
    const navigate = useNavigate();

    function navigationHandler (e, path){
        e.preventDefault();
        setCollapse('hidden');
        navigate(path)
    }
    return (
        <div className={'fixed w-full z-10 bg-white top-0 lg:hidden'}>
            <div className={collapse === 'hidden' ? 'flex flex-row justify-between w-full py-1 px-4 shadow' : 'flex flex-row justify-between w-full py-1 px-4'}>
                <span>Hi Recruiter!</span>

                <button onClick={() => { setCollapse((prev) => prev === 'hidden' ? 'block' : 'hidden')}}>
                    <div className="space-y-1">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        {
                        collapse === 'hidden' &&
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        }
                        {
                        collapse === 'block' &&
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        }
                    </svg>
                    </div>
                </button>
            </div>
            <nav className={"flex-grow lg:hidden px-4 pb-4 md:pb-0 md:overflow-y-auto shadow w-full " + collapse}>
                <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="" onClick={(e) => navigationHandler(e, '/')}>Home</a>
                <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="" onClick={(e) => navigationHandler(e, '/active-jobs')}>Active Jobs</a>
                <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="" onClick={(e) => navigationHandler(e, '/archived-jobs')}>Archived Jobs</a>
                <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="" onClick={(e) => navigationHandler(e, '/settings')}>Setting</a>
            </nav>
      </div>
    )
};

export default MobileNav;