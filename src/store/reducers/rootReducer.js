import {combineReducers} from "redux";
import transactions from "./transactions";
import savingsAccounts from "./savingsAccounts";
import accounts from "./accountReducer";
import currentAccounts from "./currentAccounts";

export default combineReducers({
    transactions,
    savingsAccounts,
    accounts,
    currentAccounts
})