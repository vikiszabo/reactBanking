import {combineReducers} from "redux";
import transactions from "./transactions";
import savingsAccounts from "./savingsAccounts";
import accounts from "./accountReducer";

export default combineReducers({
    transactions,
    savingsAccounts,
    accounts
})