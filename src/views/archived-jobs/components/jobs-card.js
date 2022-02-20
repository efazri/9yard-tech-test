import React from 'react';

function JobCard ({ data }) {
    return (
        <div className='border shadow bg-white rounded-lg p-5 w-1/4'>
            <div className='flex flex-col justify-between'>
                <div>
                    <div className='flex flex-row'>
                        <div>
                            
                        </div>
                        <div>
                            <h1 className='font-bold'>{data.jobTitle}</h1>
                            <span className='text-sm text-blue-400'>{data.companyName}</span>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <span>{data.location}</span>
                        <span>{data.exp}</span>
                    </div>
                </div>

                <div>
                    <span className='text-xs'>dibuat {data.createdAt} yang lalu</span>
                </div>
            </div>

        </div>
    )
};

export default JobCard;