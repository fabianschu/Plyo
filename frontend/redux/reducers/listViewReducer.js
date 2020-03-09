const initialState = {
    filterRejected: true
};

export const listViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_REJECTION_FILTER":
        return {
            ...state,
            filterRejected: !state.filterRejected
        };
        default:
        return state;
    }
};

