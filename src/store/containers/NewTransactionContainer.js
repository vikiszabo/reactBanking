import React from 'react';
import {connect} from 'react-redux';
import NewTransactionForm from "../../components/Transaction/NewTransaction/NewTransactionForm/NewTransactionForm";
import {createTransaction} from "../actions/transactions";

const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: (transaction) => {dispatch(createTransaction(dispatch, transaction))}
    };
};

const mapStateToProps = (state) => {
    return {
        newTransaction: state.transactions.newTransaction
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(NewTransactionForm);