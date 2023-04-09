import { applyMiddleware, createStore } from "redux";
import reducers from "./ReduxReducers";
import thunk from "redux-thunk";

// store functionalities

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk),
)