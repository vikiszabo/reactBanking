import axios from "axios";
import {navigate} from "@reach/router";
import {toastr} from "react-redux-toastr";
import * as actions from "./actions"

const txnURL = "http://localhost:8000/transactions";

export const fetchTransactions = (dispatch) => {
    axios.get(txnURL)
        .then(response => dispatch(fetchTransactionsSuccess(response)))
        .catch(error => dispatch(fetchTransactionsFailure(error)));

    return {
        type: actions.FETCH_TRANSACTIONS
    }
};

export const fetchTransactionsSuccess = (transactions) => {
    return {
        type: actions.FETCH_TRANSACTIONS_SUCCESS,
        payload: transactions
    }
};

export const fetchTransactionsFailure = (error) => {
    return {
        type: actions.FETCH_TRANSACTIONS_FAILURE,
        payload: error
    }
};

export const fetchTransaction = (dispatch, id) => {
    axios.get(txnURL + "/" + id)
        .then(response => dispatch(fetchTransactionSuccess(response)))
        .catch(error => dispatch(fetchTransactionFailure(error)));

    return {
        type: actions.FETCH_TRANSACTION
    }
};

export const fetchTransactionSuccess = (transaction) => {
    return {
        type: actions.FETCH_TRANSACTION_SUCCESS,
        payload: transaction
    }
};

export const fetchTransactionFailure = (error) => {
    return {
        type: actions.FETCH_TRANSACTION_FAILURE,
        payload: error
    }
};


function createTransactionSuccess() {
    navigate("/transactions");
    toastr.success('Transfer', 'successful');

    return {
        type: actions.CREATE_TRANSACTION_SUCCESS
    };
}

function createTransactionFailure(error) {
    return {
        type: actions.CREATE_TRANSACTION_FAILURE,
        payload: error
    };
}

export const createTransaction = (dispatch, transaction) => {
    axios.post(txnURL, transaction)
        .then(() => dispatch(createTransactionSuccess()))
        .catch(error => dispatch(createTransactionFailure(error)));
    return {
        type: actions.CREATE_TRANSACTION
    }
};

