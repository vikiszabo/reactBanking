import {combineReducers} from "redux";
import transactions from "./transactions";
import savingsAccounts from "./savingsAccounts";

export default combineReducers({
    transactions,
    savingsAccounts
})