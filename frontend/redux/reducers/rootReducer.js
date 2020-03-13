import { combineReducers } from "redux";
import { plyosReducer } from "./plyosReducer";
import { listViewReducer } from "./listViewReducer";
import { generalUiReducer } from "./generalUiReducer";

export default combineReducers({
    plyosReducer: plyosReducer,
    listViewReducer: listViewReducer,
    generalUiReducer: generalUiReducer
});

