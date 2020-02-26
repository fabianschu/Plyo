import React, {useState} from 'react';
import FilterSortBar from './FilterSortBar';
import SortMenu from './SortMenu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FilterSortButton from './FilterSortButton';

const ApplicationListView = (props) => {

    const [showSortMenu, setShowSortMenu] = useState(false);

    const [showScheduled, setShowScheduled] = useState(true);
    const [showPending, setShowPending] = useState(true);
    const [showRejected, setShowRejected] = useState(false);

    const [sortAge, setSortAge] = useState(0);
    const [sortUpdate, setSortUpdate] = useState(0);
    const [sortProgress, setSortProgress] = useState(0);

    
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
    }
    const handleUpdateSort = event => {
        setSortUpdate((sortUpdate + 1) % 3);
    }
    const handleProgressSort = event => {
        setSortProgress((sortProgress + 1) % 3);
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
            <div 
                style={{height: '200vh'}}>
                <Typography variant="h3">
                    List with applications
                </Typography>
            </div>
        </>
    )
}

export default ApplicationListView
