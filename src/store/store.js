
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import allReducers from "./reducers";

export default createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

