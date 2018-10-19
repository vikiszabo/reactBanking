const accountURL = "http://localhost:8000/accounts";

export function loadAccountsSuccess(accounts) {
    return {
        type: 'LOAD_ACCOUNTS',
        transactions: accounts
    }
}

export function loadAccounts() {
    return function (dispatch) {
        return fetch(accountURL)
            .then(response => response.json())
            .then(accounts => dispatch(loadAccountsSuccess(accounts)))
            .catch(error => console.log(error))
    }
}