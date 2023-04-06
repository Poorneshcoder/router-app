import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducer";

// redux combined reducers

const reducers = combineReducers({
    inventory: inventoryReducer,
});

export default reducers;