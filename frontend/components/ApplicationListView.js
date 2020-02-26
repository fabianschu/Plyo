import React, {useState} from 'react';
import FilterSortBar from './FilterSortBar';
import FilterSortContainer from './FilterSortContainer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FilterSortButton from './FilterSortButton';

const ApplicationListView = (props) => {

    const [showSortMenu, setShowSortMenu] = useState(false);

    const [showScheduled, setShowScheduled] = useState(true);
    const [showPending, setShowPending] = useState(true);
    const [showRejected, setShowRejected] = useState(false);

    
    
    const handleScheduledFilter = event => {
        setShowScheduled(!showScheduled);
    }
    const handleRejectedFilter = event => {
        setShowRejected(!showRejected);
    } 
    const handlePendingFilter = event => {
        setShowPending(!showPending);
    }
    const handleSortMenu = event => {
        setShowSortMenu(!showSortMenu);
    }

    return (
        <>
            <FilterSortBar 
                showSortMenu={showSortMenu}
                setShowSortMenu={setShowSortMenu}
                handleScheduledFilter={handleScheduledFilter}
                handlePendingFilter={handlePendingFilter}
                handleRejectedFilter={handleRejectedFilter}
                showScheduled={showScheduled}
                showPending={showPending}
                showRejected={showRejected}/>
            {/* <FilterSortButton 
                checked={checked}
                setChecked={setChecked}
                /> */}
            <FilterSortContainer 
            showSortMenu={showSortMenu}/>
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
