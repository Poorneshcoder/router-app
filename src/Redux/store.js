import { applyMiddleware, createStore } from "redux";
import reducers from "./ReduxReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// store functionalities

export const store = createStore(
    reducers,
    {},
    
    composeWithDevTools(applyMiddleware(thunk)),
)