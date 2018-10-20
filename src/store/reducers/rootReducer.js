import {combineReducers} from "redux";
import transactions from "./transactions";
import partners from "./partners";

export default combineReducers({
    transactions,
    partners
})