import React from 'react';
import { FaMapPin, FaBriefcase, FaArchive, FaRedo } from 'react-icons/fa';

function JobCard ({ data, onAction, type }) {
    return (
        <div className='border shadow bg-white rounded-lg w-1/4 h-40 mr-2 overflow-hidden flex flex-row'>
            <div className='w-8 bg-blue-700 h-full' />

            <div className='flex flex-col justify-between px-4 py-3 w-full'>
                <div>
                    <div className='flex flex-row'>
                        <div>
                            <h1 className='font-bold'>{data.jobTitle}</h1>
                            <span className='text-sm text-blue-400'>{data.companyName}</span>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='flex flex-col justify-center mr-2'>
                                <FaMapPin size={'0.7vw'} />
                            </div>
                            <span className='flex flex-row'>{data.location}</span>
                        </div>

                        <div className='flex flex-row'>
                            <div className='flex flex-col justify-center mr-2'>
                                <FaBriefcase size={'0.7vw'} />
                            </div>
                            <span>{data.exp}</span>
                        </div>
                        
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <span className='text-xs'>dibuat {data.createdAt} yang lalu</span>

                    <button onClick={() => onAction(data)}>
                        { type === 'active' ? <FaArchive /> : <FaRedo />}
                    </button>
                </div>
            </div>

        </div>
    )
};

export default JobCard;