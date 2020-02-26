import React from 'react';
import FilterSortBar from './FilterSortBar';
import FilterSortContainer from './FilterSortContainer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FilterSortButton from './FilterSortButton';

const ApplicationList = (props) => {

    const [checked, setChecked] = React.useState(false);

    return (
        <>
            <FilterSortBar 
                checked={checked}
                setChecked={setChecked}/>
            {/* <FilterSortButton 
                checked={checked}
                setChecked={setChecked}
                /> */}
            <FilterSortContainer checked={checked}/>
            <div 
                style={{height: '200vh'}}>
                <Typography variant="h3">
                    List with applications
                </Typography>
            </div>
        </>
    )
}

export default ApplicationList
