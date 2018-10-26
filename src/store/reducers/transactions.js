import * as actions from "../actions/actions"


const INITIAL_STATE = {
    transactionList: {transactions: [], error: null, loading: true},
    newTransaction: {transaction: {}, error: null, loading: false},
    activeTransaction: {transaction: {}, error: null, loading: false},
    deletedTransaction: {transaction: {}, error: null, loading: false},
};


const transactions = (state = INITIAL_STATE, action) => {
    let error;
    switch (action.type) {
        case actions.FETCH_TRANSACTIONS:
            return {...state, transactionList: {transactions: [], error: null, loading: true}};
        case actions.FETCH_TRANSACTIONS_SUCCESS:
            return {...state, transactionList: {transactions: action.payload, error: null, loading: false}};
        case actions.FETCH_TRANSACTIONS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, transactionList: {transactions: [], error: error, loading: false}};
        case actions.RESET_TRANSACTIONS:
            return {...state, transactionList: {transactions: [], error: null, loading: false}};
        case actions.CREATE_TRANSACTION:
            return {...state, newTransaction: {transaction: null, error: null, loading: true}};
        case actions.CREATE_TRANSACTION_SUCCESS:
            return {...state, newTransaction: {transaction: null, error: null, loading: false}};
        case actions.CREATE_TRANSACTION_FAILURE:
            return {...state, newTransaction: {transaction: null, error: error, loading: false}};
        case actions.FETCH_TRANSACTION:
            return {...state, activeTransaction: {transaction: {}, error: null, loading: true}};
        case actions.FETCH_TRANSACTION_SUCCESS:
            return {...state, activeTransaction: {transaction: action.payload, error: null, loading: false}};
        case actions.FETCH_TRANSACTION_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, activeTransaction: {transaction: {}, error: error, loading: false}};
        default:
            return state;
    }
};


export default transactions;