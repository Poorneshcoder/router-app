import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducer";
import userListReducers from "./userListReducers";




// redux combined reducers

const reducers = combineReducers(
    {
        inventory : inventoryReducer,
        userList : userListReducers,
        

}
);

export default reducers;