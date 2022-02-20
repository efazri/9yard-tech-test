import React from "react";
import CountUp from 'react-countup';

function InsightCard ({ total, title }) {
    return (
        <div className="card flex flex-col border p-3 border-black mt-3 md:mt-0">
            <CountUp start={0} end={total} duration={0.7} className="text-2xl" />
            <span className="text-sm">{title}</span>
        </div>
    )
};

export default InsightCard;