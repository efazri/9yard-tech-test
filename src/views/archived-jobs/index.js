import React from "react";
import { Card } from './components';

const jobs = [
    {
        id: 1,
        jobTitle: 'CRO',
        companyName: 'PT. ABC',
        location: 'Jakarta',
        exp: '1 Tahun',
        createAt: '22-01-2022'
    }
]

function ArchivedJobs () {
    return (
        <div className="w-full p-5">
            { jobs.map((el, index) => {
                return <Card data={el} key={index} />
            })}
        </div>
    )
};

export default ArchivedJobs;