const initialState = {
    sidebar: false
};

export const generalUiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
        return {
            ...state,
            sidebar: !state.sidebar
        };

        default:
        return state;
    }
};