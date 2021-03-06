import React from "react";

function TabSection({ completedCount, shortlistedCount, data, tabSectionHandler }){
    return (
        <div className="flex flex-row w-full justify-between mt-8">
            <div className="flex flex-row">
                <a href="" onClick={(e) => tabSectionHandler(e, 'all')}>
                    <div className="flex flex-row px-2 pr-5 border-r-2 border-black">
                        <span className="flex flex-col justify-center">All</span>
                        <span className="px-1 border-2 border-black rounded-md ml-2">{data?.length}</span>
                    </div>
                </a>

                <a href="" onClick={(e) => tabSectionHandler(e, 'completed')}>
                    <div className="flex flex-row px-5 border-r-2 border-black">
                        <span className="flex flex-col justify-center">Completed</span>
                        <span className="px-1 border-2 border-black rounded-md ml-2">{completedCount}</span>
                    </div>
                </a>

                <a href="" onClick={(e) => tabSectionHandler(e, 'shortlisted')}>
                    <div className="flex flex-row px-5 border-r-2 border-black">
                        <span className="flex flex-col justify-center">Shortlisted</span>
                        <span className="px-1 border-2 border-black rounded-md ml-2">{shortlistedCount}</span>
                    </div>
                </a>

            </div>

            <div className="mr-2">
                <select className="border-2 border-black px-3">
                    <option>shorlist</option>
                </select>
            </div>
        </div>
    )
};

export default TabSection;