import { createStore } from "redux";
import reducers from "./ReduxReducers";

// store functionalities

export const store = createStore(
    reducers,
    {}
)