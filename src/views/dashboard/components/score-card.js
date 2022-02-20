import React from "react";
import CountUp from 'react-countup';

function ScoreCard ({ title, data, onAction, type }) {
    return (
        <div className="bg-gray p-5 rounded rounded-lg mt-3 md:mr-4 md:mt-0">
            <h1 className="font-bold mb-2">{title}</h1>

            {
                data?.length > 0 && data.sort((a, b) => {
                    if (type === 'profile'){
                        return b.profileMatch - a.profileMatch
                    } else if (type === 'critical') {
                        return b.criticalScore - a.criticalScore
                    } else if (type === 'logical') {
                        return b.logicalScore - a.logicalScore
                    }
                }) &&
                data.map((el, index) => {
                    if (index < 3){
                        return (
                            <div className="flex flex-row w-full md:w-60 justify-between border-b border-black pb-2 mt-5" key={index}>
                                <span className="w-1/4">{el.name}</span>
                                <span className="text-right">
                                    {
                                        type === 'profile' ? 
                                        <CountUp start={0} end={el.profileMatch} duration={0.5}/> :
                                        type === 'logical' ?
                                        <CountUp start={0} end={el.logicalScore} duration={0.5}/> :
                                        type === 'critical' ? 
                                        <CountUp start={0} end={el.criticalScore} duration={0.5}/> :
                                        null
                                    }
                                    %
                                </span>
                                <button 
                                    type="button" 
                                    className={el.shortlisted ? "outline-tomato px-4 rounded hover:bg-[#e34602] hover:text-white" :"outline-green px-4 rounded hover:bg-[#07e494]"}
                                    onClick={() => onAction(el)}
                                >
                                    <span className={el.shortlisted ? "font-tomato font-bold hover:text-white" : "font-secondary font-bold hover:text-white"}>{el.shortlisted ? 'remove' : 'shortlist' }</span>
                                </button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
};

export default ScoreCard;