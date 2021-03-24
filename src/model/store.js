import {createStore} from "redux"
import recordReducer from "./reducer/record_reducer"
import {composeWithDevTools} from "redux-devtools-extension";

export default createStore(recordReducer,composeWithDevTools())


