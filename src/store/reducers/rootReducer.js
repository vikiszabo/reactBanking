import {combineReducers} from "redux";
import transactions from "./transactions";
import partners from "./partners";
import {reducer as toastrReducer} from 'react-redux-toastr'


export default combineReducers({
    transactions,
    partners,
    toastr: toastrReducer // <- Mounted at toastr.
})