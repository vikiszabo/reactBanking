import axios from "axios";
import {navigate} from "@reach/router";
import {toastr} from "react-redux-toastr";
import * as actions from "./actions"
import {urls} from "../../utils/constants/constants";


export const fetchTransactions = () => async (dispatch) => {
    try {
        dispatch({type: actions.FETCH_TRANSACTIONS});
        const {data: transactions} = await axios.get(urls.transactions);
        dispatch(fetchTransactionsSuccess(transactions))
    } catch (e) {
        dispatch(fetchTransactionsFailure(e))
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

export const fetchTransaction = id => async dispatch => {
    try {
        dispatch({type: actions.FETCH_TRANSACTION});
        const {data: transaction} = await axios.get(urls.transactions + "/" + id);
        dispatch(fetchTransactionSuccess(transaction))
    } catch (e) {
        dispatch(fetchTransactionFailure(e))
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
    toastr.error(error.toString());
    return {
        type: actions.CREATE_TRANSACTION_FAILURE,
        payload: error
    };
}

export const createTransaction = transaction => async dispatch =>{
    try {
        dispatch({type: actions.CREATE_TRANSACTION});
        await axios.post(urls.transactions, transaction);
        dispatch(createTransactionSuccess())
    } catch (e) {
        dispatch(createTransactionFailure(e))
    }
};

