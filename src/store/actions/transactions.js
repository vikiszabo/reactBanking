
const txnURL = "http://localhost:8000/transactions";

export function loadTransactionsSuccess(transactions) {
    return {
        type: 'LOAD_TRANSACTIONS',
        transactions: transactions
    }
}

export function loadTransactions() {
    return function (dispatch) {
        return fetch(txnURL)
            .then(response => response.json())
            .then(transactions => dispatch(loadTransactionsSuccess(transactions)))
            .catch(error => console.log(error))
    }
}
