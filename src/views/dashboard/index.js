import React, { useEffect, useState } from "react";
import Card from './components/score-card';
import Table from './components/table-list';
import TabSection from './components/tab-section';
import InsightCard from "./components/insight-card";

const data = [
    { 
        id: 1,
        name: 'Mike',
        profileMatch: 83,
        logicalScore: 90,
        criticalScore: 76,
        skillMatch: 64,
        status: 'Completed',
        shortlisted: true,
    },
    { 
        id: 2,
        name: 'Bernice',
        profileMatch: 80,
        logicalScore: 88,
        criticalScore: 92,
        skillMatch: 80,
        status: 'Completed',
        shortlisted: false,
    },
    { 
        id: 3,
        name: 'Weiliang',
        profileMatch: 79,
        logicalScore: 83,
        criticalScore: 94,
        skillMatch: 82,
        status: 'Completed',
        shortlisted: false,
    },
    { 
        id: 4,
        name: 'Helen',
        profileMatch: 0,
        logicalScore: 0,
        criticalScore: 70,
        skillMatch: 69,
        status: 'In progress',
        shortlisted: false,
    },
    { 
        id: 5,
        name: 'Rachel',
        profileMatch: 0,
        logicalScore: 0,
        criticalScore: 0,
        skillMatch: 0,
        status: 'Unattempted',
        shortlisted: false,
    }
]

const insight = [
    {
        id: 1,
        title: 'New candidates',
        total: 5
    },
    {
        id: 2,
        title: 'Total candidates',
        total: 20
    },
    {
        id: 3,
        title: 'Emails sent',
        total: 64
    },
    {
        id: 4,
        title: 'Emails opened',
        total: 50
    },
    {
        id: 5,
        title: 'Emails bounced',
        total: 21
    }
]

function Dashboard (){

    const [selectedData, setSelectedData] = useState(data)
    const [shortlistedCount, setShortlistedCount] = useState(0)
    const [completedCount, setCompletedCount] = useState(0)
    const [currentTab, setCurrentTab] = useState('all')
    const [sort, setSort] = useState('asc');

    useEffect(() => {
        data?.map((el) => {
            if (el.status === 'Completed') {
                setCompletedCount((prev) => prev + 1)
            }

            if (el.shortlisted) {
                setShortlistedCount((prev) => prev + 1)
            }
        })
    }, [])

    function tabSectionHandler(event, type){
        event?.preventDefault()
        setCurrentTab(type)
        if (type === 'completed'){
            const newArr = data.filter((el) => el.status === 'Completed')
            setSelectedData(newArr)
        } else if (type === 'shortlisted'){
            const newArr = data.filter((el) => el.shortlisted)
            setSelectedData(newArr)
        } else if (type === 'all'){
            setSelectedData(data)
        }
    };

    function sorting(event, type){
        event.preventDefault()

        if (sort === 'desc'){
            setSort('asc')
        } else if (sort === 'asc') {
            setSort('desc')
        }
       
        const newData = selectedData?.sort((a, b) => {

            if (type === 'name'){
                if (sort === 'asc'){
                    return a.name.localeCompare(a.name)
                } else if (sort === 'desc'){
                    return b.name.localeCompare(a.name)
                }
            } else if (type === 'status'){
                if (sort === 'asc'){
                    return a.status.localeCompare(a.status)
                } else if (sort === 'desc'){
                    return b.status.localeCompare(a.status)
                }
            } else if (type === 'profile') {
                if (sort === 'asc'){
                    return a.profileMatch - b.profileMatch
                } else if (sort === 'desc'){
                    return b.profileMatch - a.profileMatch
                }
            } else if (type === 'logical') {
                if (sort === 'asc'){
                    return a.logicalScore - b.logicalScore
                } else if (sort === 'desc'){
                    return b.logicalScore - a.logicalScore
                }
            } else if (type === 'critical') {
                if (sort === 'asc'){
                    return a.criticalScore - b.criticalScore
                } else if (sort === 'desc'){
                    return b.criticalScore - a.criticalScore
                }
            } else if (type === 'skill') {
                if (sort === 'asc'){
                    return a.skillMatch - b.skillMatch
                } else if (sort === 'desc'){
                    return b.skillMatch - a.skillMatch
                }
            }
        })

        setSelectedData(newData)
    };

    function onActionHandler (profileDetail){
        if (profileDetail.shortlisted){
            setShortlistedCount((prev) => prev - 1)
        } else {
            setShortlistedCount((prev) => prev + 1)
        }
        data.map((el) => {
            if (el.id === profileDetail.id){
                el.shortlisted = el.shortlisted ? false : true
            }
        })

        if (currentTab === 'shortlisted'){
            tabSectionHandler(null, 'shortlisted')
        }
    }

    return (
        <div className="flex flex-col p-5 w-full">

            <h1 className="mt-5">Insights</h1>
            <div className="flex flex-col md:flex-row justify-between w-full lg:w-3/5">
                {
                    insight?.map((el, index) => {
                        return (
                            <InsightCard 
                                total={el.total}
                                title={el.title}
                                key={index}
                            />
                        )
                    })
                }
            </div>

            <div className="flex flex-col md:flex-row mt-5">
                <Card 
                    data={data}
                    title={"Top Profile Match"}
                    type="profile"
                    onAction={onActionHandler}
                />

                <Card 
                    data={data}
                    title={"Top Logical Score"}
                    type="logical"
                    onAction={onActionHandler}
                />

                <Card 
                    data={data}
                    title={"Top Critical Score"}
                    type="critical"
                    onAction={onActionHandler}
                />
            </div>

            <TabSection 
                shortlistedCount={shortlistedCount}
                completedCount={completedCount}
                data={data}
                tabSectionHandler={tabSectionHandler}
            />

            <Table 
                data={selectedData}
                sorting={sorting}
            />

        </div>
    )
};

export default Dashboard;