import React, { useState } from "react";
import { JCard } from '../../components';
const jobs = [
    {
        id: 1,
        jobTitle: 'Customer Relation Officer',
        companyName: 'PT. ABC',
        location: 'Jakarta',
        exp: '1 Tahun',
        createAt: '22-01-2022'
    },
    {
        id: 2,
        jobTitle: 'Sales Engineer',
        companyName: 'PT. Armada Pura Angkasa',
        location: 'Medan',
        exp: '1-2 Tahun',
        createAt: '22-01-2022'
    }
]

function ActiveJobs () {
    const [selectedJobs, setSelectedJobs] = useState(jobs)

    async function onArchiveHandler(data){
        const current = await localStorage.getItem('archived');
        const dataStorage = JSON.parse(current);
        if (current){
            let flag = false;
            dataStorage?.map((el) => {
                if (el === data.id){
                    flag = true
                };
            })

            if (!flag){
                dataStorage.push(data?.id)
                localStorage.setItem('archived', JSON.stringify(dataStorage))
            }

        } else {
            const id = [data.id]
            localStorage.setItem('archived', JSON.stringify(id))
        }
        
    }

    return (
        <div className="w-full p-5 mt-5 lg:mt-0 flex flex-wrap">
            { selectedJobs?.map((el, index) => {
                return (
                    <JCard 
                        data={el} 
                        type="active" 
                        key={index} 
                        onAction={onArchiveHandler}
                    />
                )
            })}
        </div>
    )
};

export default ActiveJobs;