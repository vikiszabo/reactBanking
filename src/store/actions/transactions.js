import axios from "axios";
import {navigate} from "@reach/router";

//Transaction list
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';
export const RESET_TRANSACTIONS = 'RESET_TRANSACTIONS';

// Get Transaction
export const FETCH_TRANSACTION = 'FETCH_TRANSACTION';
export const FETCH_TRANSACTION_SUCCESS = 'FETCH_TRANSACTION_SUCCESS';
export const FETCH_TRANSACTION_FAILURE = 'FETCH_TRANSACTION_FAILURE';
export const RESET_TRANSACTION = 'RESET_TRANSACTION';

// Create Transaction
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";
export const CREATE_TRANSACTION_SUCCESS = "CREATE_TRANSACTION_SUCCESS";
export const CREATE_TRANSACTION_FAILURE = "CREATE_TRANSACTION_FAILURE";
export const RESET_NEW_TRANSACTION = "RESET_NEW_TRANSACTION";

const txnURL = "http://localhost:8000/transactions";

export const fetchTransactions = (dispatch) => {
    axios.get(txnURL)
        .then(response => dispatch(fetchTransactionsSuccess(response)))
        .catch(error => dispatch(fetchTransactionsFailure(error)));

    return {
        type: FETCH_TRANSACTIONS
    }
};

export const fetchTransactionsSuccess = (transactions) => {
    return {
        type: FETCH_TRANSACTIONS_SUCCESS,
        payload: transactions
    }
};

export const fetchTransactionsFailure = (error) => {
    return {
        type: FETCH_TRANSACTIONS_FAILURE,
        payload: error
    }
};

function createTransactionSuccess() {
    navigate("/transactions");
    return {
        type: CREATE_TRANSACTION_SUCCESS
    };
}

function createTransactionFailure(error) {
    return {
        type: CREATE_TRANSACTION_FAILURE,
        payload: error
    };
}

export const createTransaction = (dispatch, transaction) => {
    axios.post(txnURL, transaction)
        .then(() => dispatch(createTransactionSuccess()))
        .catch(error => dispatch(createTransactionFailure(error)))
    return {
        type: CREATE_TRANSACTION
    }
};

