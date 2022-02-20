import React, { useEffect, useState } from "react";
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

function ArchivedJobs () {
    const [selectedJobs, setSelectedJobs] = useState([])

    useEffect(() => {
        const storage = localStorage.getItem('archived')

        if (storage){
            const storageParse = JSON.parse(storage);
            const newData = []
            jobs?.map(el => {
                storageParse?.map(id => {
                    if (el.id === id){
                        newData.push(el)
                    }
                })
                setSelectedJobs(newData)
            })
        }
    }, [])

    function onActionHandler (data){
        const storage = localStorage.getItem('archived')

        if (storage){
            const storageParse = JSON.parse(storage);
            const newData = []
            storageParse.map(id => {
                if (id != data?.id){
                    newData.push(id)
                }
            })
            localStorage.setItem('archived', JSON.stringify(newData))
        }
    }

    return (
        <div className="w-full p-5 mt-5 lg:mt-0 flex flex-row">
            { selectedJobs.map((el, index) => {
                return (
                    <JCard 
                        data={el} 
                        key={index} 
                        type="archived"
                        onAction={onActionHandler}
                    />
                )
            })}
        </div>
    )
};

export default ArchivedJobs;