export const toggleRejectedFilter = () => dispatch => {
    dispatch({
    type: "TOGGLE_REJECTION_FILTER"
    })
};

export const toggleScheduledFilter = () => dispatch => {
    dispatch({
    type: "TOGGLE_SCHEDULED_FILTER"
    })
};

export const togglePendingFilter = () => dispatch => {
    dispatch({
    type: "TOGGLE_PENDING_FILTER"
    })
};

export const changeAgeSort = (filterIdx) => dispatch => {
    dispatch({
    type: "CHANGE_AGE_SORT",
    payload: filterIdx
    })
};
export const changeUpdateSort = (filterIdx) => dispatch => {
    dispatch({
    type: "CHANGE_UPDATE_SORT",
    payload: filterIdx
    })
};
export const changeProgressSort = (filterIdx) => dispatch => {
    dispatch({
    type: "CHANGE_PROGRESS_SORT",
    payload: filterIdx
    })
};

