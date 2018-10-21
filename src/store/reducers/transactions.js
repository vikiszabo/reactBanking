import {
    CREATE_TRANSACTION, CREATE_TRANSACTION_FAILURE, CREATE_TRANSACTION_SUCCESS,
    FETCH_TRANSACTIONS,
    FETCH_TRANSACTIONS_FAILURE,
    FETCH_TRANSACTIONS_SUCCESS,
    RESET_TRANSACTIONS
} from "../actions/transactions";


const INITIAL_STATE = {
    transactionList: {transactions: [], error: null, loading: true},
    newTransaction: {transaction: null, error: null, loading: false},
    activeTransaction: {transaction: null, error: null, loading: false},
    deletedTransaction: {transaction: null, error: null, loading: false},
};


const transactions = (state = INITIAL_STATE, action) => {
    let error;
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return {...state, transactionList: {transactions: [], error: null, loading: true}};
        case FETCH_TRANSACTIONS_SUCCESS:// return list of posts and make loading = false
            return {...state, transactionList: {transactions: action.payload, error: null, loading: false}};
        case FETCH_TRANSACTIONS_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {...state, transactionList: {transactions: [], error: error, loading: false}};
        case RESET_TRANSACTIONS:
            return {...state, transactionList: {transactions: [], error: null, loading: false}};
        case CREATE_TRANSACTION:
            return {...state, newTransaction: {transaction: null, error: null, loading: true}};
        case CREATE_TRANSACTION_SUCCESS:
            return {...state, newTransaction: {transaction: null, error: null, loading: false}};
        case CREATE_TRANSACTION_FAILURE:
            return {...state, newTransaction: {transaction: null, error: error, loading: false}};
        default:
            return state;
    }
};


export default transactions;