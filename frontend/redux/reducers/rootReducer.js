import { combineReducers } from "redux";
import { plyosReducer } from "./plyosReducer";
import { listViewReducer } from "./listViewReducer";

export default combineReducers({
    plyosReducer: plyosReducer,
    listViewReducer: listViewReducer
});

