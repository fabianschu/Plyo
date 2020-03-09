import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getPlyos} from '../redux/actions/plyosAction';
import FilterSortBar from './FilterSortBar';
import SortMenu from './SortMenu';
import EditPlyo from './EditPlyo';
import ApplicationList from './ApplicationList';
import AddPlyoButton from './AddPlyoButton';
import {applications} from '../public/mock-data';

const ApplicationListView = (props) => {

    console.log('props: ',props)

    const [applicationsArray, setApplicationsArray] = useState([]);

    //display UI elements states
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [showAddMenu, setShowAddMenu] = useState(false);


    //filter states
    const [showScheduled, setShowScheduled] = useState(true);
    const [showPending, setShowPending] = useState(true);
    const [showRejected, setShowRejected] = useState(false);

    //sorting states
    const [sortAge, setSortAge] = useState(0);
    const [sortUpdate, setSortUpdate] = useState(0);
    const [sortProgress, setSortProgress] = useState(0);


    useEffect(() => {
        // setApplicationsArray(applications);
        console.log(props.getPlyos());

    }, []);

    //filter handler
    const handleScheduledFilter = event => {
        setShowScheduled(!showScheduled);
    }
    const handleRejectedFilter = event => {
        setShowRejected(!showRejected);
    } 
    const handlePendingFilter = event => {
        setShowPending(!showPending);
    }


    //sorting handler
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


    const handleAddMenu = event => {
        setShowAddMenu(!showAddMenu);
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
            <AddPlyoButton 
                // showAddMenu={showAddMenu}
                handleAddMenu={handleAddMenu}
                />
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
                    showRejected={showRejected}
                    showPending={showPending}
                    showScheduled={showScheduled}
                    sortAge={sortAge}
                    sortUpdate={sortUpdate}
                    sortProgress={sortProgress}
            />}
            <EditPlyo 
                showAddMenu={showAddMenu}
                setShowAddMenu={setShowAddMenu}
                handleAddMenu={handleAddMenu}/>
        </>
    )
}

const mapStateToProps = state => ({
    data: state.plyosReducer.plyosData
})

export default connect( mapStateToProps, {getPlyos})(ApplicationListView);