import React from "react";

function TableList ({ data, sorting }) {
    return (
        <div className="mt-0 xs:container">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 table-auto">
                <thead className="border-b-2 border-black">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left">
                            <a href="" onClick={(event) => sorting(event, 'name')}>Name</a>   
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left">
                            <a href="" onClick={(event) => sorting(event, 'status')}>Status</a>  
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-center">
                            <a href="" onClick={(event) => sorting(event, 'profile')}>Profile Match</a>   
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-center">
                            <a href="" onClick={(event) => sorting(event, 'logical')}>Logical Score</a>   
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-center">
                            <a href="" onClick={(event) => sorting(event, 'critical')}>Critical Score</a>    
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-center">
                            <a href="" onClick={(event) => sorting(event, 'skill')}>Skill Match</a> 
                        </th>
                    </tr>
                </thead>

                <tbody>
                    { data?.map((el, index) => {
                        return (
                            <tr className="hover:bg-gray dark:hover:bg-gray-100 border-b border-black" key={index}>
                                <td className="p-4 w-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">{el.name}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    {
                                        el.status === 'Completed' ? 
                                        <span className="bg-green text-white text-center rounded-full px-3 py-1">{el.status}</span> : el.status === 'In progress' ? 
                                        <span className="bg-orange text-white text-center rounded-full px-3 py-1">{el.status}</span> : el.status === 'Unattempted' ? 
                                        <span className="bg-tomato text-white text-center rounded-full px-3 py-1">{el.status}</span> : null
                                    }
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black text-center">{el.profileMatch ? el.profileMatch + '%' : '-'}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black text-center">{el.logicalScore ? el.logicalScore + '%' : '-'}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black text-center">{el.criticalScore ? el.criticalScore + '%' : '-'}</td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black text-center">{el.skillMatch ? el.skillMatch + '%' : '-'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default TableList;