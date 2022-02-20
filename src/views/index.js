import React, { lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard"
import Settings from "./settings";
import ArchivedJobs from "./archived-jobs";
import ActiveJobs from "./active-jobs";

function Views (){
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/active-jobs" element={<ActiveJobs />} />
            <Route path="/archived-jobs" element={<ArchivedJobs />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
};

export default Views;
