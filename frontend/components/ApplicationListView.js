import React, {useState, useEffect} from 'react';
import FilterSortBar from './FilterSortBar';
import SortMenu from './SortMenu';
import Typography from '@material-ui/core/Typography';
import ApplicationList from './ApplicationList';
import {applications} from '../public/mock-data';

const ApplicationListView = (props) => {

    const [applicationsArray, setApplicationsArray] = useState([]);

    const [showSortMenu, setShowSortMenu] = useState(false);

    const [showScheduled, setShowScheduled] = useState(true);
    const [showPending, setShowPending] = useState(true);
    const [showRejected, setShowRejected] = useState(false);

    const [sortAge, setSortAge] = useState(0);
    const [sortUpdate, setSortUpdate] = useState(0);
    const [sortProgress, setSortProgress] = useState(0);

    useEffect(() => {
        setApplicationsArray(applications);
    }, []);
    
    //filter
    const handleScheduledFilter = event => {
        setShowScheduled(!showScheduled);
    }
    const handleRejectedFilter = event => {
        setShowRejected(!showRejected);
    } 
    const handlePendingFilter = event => {
        setShowPending(!showPending);
    }

    //sorting
    const handleSortMenu = event => {
        setShowSortMenu(!showSortMenu);
    }
    const handleAgeSort = event => {
        setSortAge((sortAge + 1) % 3);
        setSortUpdate(0);
        setSortProgress(0);
    }
    const handleUpdateSort = event => {
        setSortUpdate((sortUpdate + 1) % 3);
        setSortAge(0);
        setSortProgress(0);
    }
    const handleProgressSort = event => {
        setSortProgress((sortProgress + 1) % 3);
        setSortUpdate(0);
        setSortAge(0);
    }

    return (
        <>
            <FilterSortBar 
                showSortMenu={showSortMenu}
                handleSortMenu={handleSortMenu}
                handleScheduledFilter={handleScheduledFilter}
                handlePendingFilter={handlePendingFilter}
                handleRejectedFilter={handleRejectedFilter}
                showScheduled={showScheduled}
                showPending={showPending}
                showRejected={showRejected}
                />
            {/* <FilterSortButton 
                checked={checked}
                setChecked={setChecked}
                /> */}
            <SortMenu 
                showSortMenu={showSortMenu}
                handleAgeSort={handleAgeSort}
                handleUpdateSort={handleUpdateSort}
                handleProgressSort={handleProgressSort}
                sortAge={sortAge}
                sortUpdate={sortUpdate}
                sortProgress={sortProgress}/>
            {applicationsArray[0] && 
                <ApplicationList
                    applicationsArray={applicationsArray}
            />}
        </>
    )
}

export default ApplicationListView
