import React from 'react';
import { FaChevronCircleLeft, FaQuestion, FaUser } from 'react-icons/fa';



function Header (){
    return (
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-center'>
                    <FaChevronCircleLeft />
                </div>
                <div className='flex flex-col justify-center ml-4'>
                    <h1 className='text-2xl'>Software Developer</h1>
                </div>
                <div className='flex flex-col justify-center ml-4'>
                    <div className='bg-gray px-4 py-1 rounded-full'>
                        <h1 className='font-bold'>10 Days Left</h1>
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col justify-center mr-2'>
                    <div className='bg-black rounded-full p-1'>
                        <FaQuestion color='#FFFFFF' size={'0.9vw'}/>
                    </div>
                </div>

                <div className='flex flex-col justify-center'>
                    <div className='bg-black rounded-full p-1'>
                        <FaUser color='#FFFFFF' size={'0.9vw'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;