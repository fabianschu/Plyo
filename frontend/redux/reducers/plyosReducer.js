const initialState = {
    plyosData: []
  };
  
export const plyosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PLYOS":
      return {
        ...state,
        plyosData: action.payload
      };

    default:
      return state;
  }
};

