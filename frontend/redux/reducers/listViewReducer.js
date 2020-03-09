const initialState = {
    filterRejected: true,
    filterScheduled: false,
    filterPending: false,
    sortAge: 0,
    sortUpdate: 0,
    sortProgress: 0
};

export const listViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_REJECTION_FILTER":
        return {
            ...state,
            filterRejected: !state.filterRejected
        };
        case "TOGGLE_SCHEDULED_FILTER":
        return {
            ...state,
            filterRejected: !state.filterScheduled
        };
        case "TOGGLE_PENDING_FILTER":
        return {
            ...state,
            filterRejected: !state.filterPending
        };
        
        case "CHANGE_AGE_SORT":

            if (action.payload === 0) {
                return {
                    ...state,
                    sortAge: 0
                }
            }

            return {
                ...state,
                sortAge: ((state.sortAge + 1) % 3)
            };

        case "CHANGE_UPDATE_SORT":
            console.log('payload: ', action.payload)
            if (action.payload === 0) {
                return {
                    ...state,
                    sortUpdate: 0
                }
            }
            console.log('payload2: ', action.payload)

            return {
                ...state,
                sortUpdate: ((state.sortUpdate + 1) % 3)
            };

        case "CHANGE_PROGRESS_SORT":

        if (action.payload === 0) {
            return {
                ...state,
                sortProgress: 0
            }
        }

        return {
            ...state,
            sortProgress: ((state.sortProgress + 1) % 3)
        };

        default:
        return state;
    }
};

