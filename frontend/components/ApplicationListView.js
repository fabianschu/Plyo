import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getPlyos} from '../redux/actions/plyosAction';
import {toggleRejectedFilter, changeAgeSort, changeUpdateSort, changeProgressSort} from '../redux/actions/listViewAction';
import FilterSortBar from './FilterSortBar';
import SortMenu from './SortMenu';
import EditPlyo from './EditPlyo';
import ApplicationList from './ApplicationList';
import AddPlyoButton from './AddPlyoButton';

const ApplicationListView = (props) => {

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
        props.getPlyos();
        setApplicationsArray(props.data);
    }, []);

    //filter handler
    const handleScheduledFilter = event => {
        setShowScheduled(!showScheduled);
    }
    const handleRejectedFilter = event => {
        setShowRejected(!showRejected);

        //############## REDUX
        // -> setting the list view
        console.log('filter rejected');
        props.toggleRejectedFilter();
    } 
    const handlePendingFilter = event => {
        setShowPending(!showPending);
    }


    //sorting handler
    const handleSortMenu = event => {
        setShowSortMenu(!showSortMenu);
    }
    const handleAgeSort = event => {
        props.changeAgeSort();
        props.changeUpdateSort(0);
        props.changeProgressSort(0);
        setSortAge((sortAge + 1) % 3);
        setSortUpdate(0);
        setSortProgress(0);
    }
    const handleUpdateSort = event => {
        props.changeAgeSort(0);
        props.changeUpdateSort();
        props.changeProgressSort(0);
        setSortUpdate((sortUpdate + 1) % 3);
        setSortAge(0);
        setSortProgress(0);
    }
    const handleProgressSort = event => {
        props.changeAgeSort(0);
        props.changeUpdateSort(0);
        props.changeProgressSort();
        setSortProgress((sortProgress + 1) % 3);
        setSortUpdate(0);
        setSortAge(0);
    }


    const handleAddMenu = event => {
        setShowAddMenu(!showAddMenu);
    }

    console.log(props.ui);

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
                    applicationsArray={props.data}
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
    data: state.plyosReducer.plyosData,
    ui: state.listViewReducer
})

export default connect( mapStateToProps, {getPlyos, toggleRejectedFilter, changeAgeSort, changeUpdateSort, changeProgressSort})(ApplicationListView);