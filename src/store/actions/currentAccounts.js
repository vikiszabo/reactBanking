const craURL = "http://localhost:8000/currentaccount";

export function loadCurrentSuccess(currentAccounts) {
    return {
        type: 'LOAD_CURRENT_ACCOUNTS',
        savingsAccounts: currentAccounts
    }
}

export function loadCurrentAccounts() {
    return function (dispatch) {
        return fetch(craURL)
            .then(response => response.json())
            .then(currentAccounts => dispatch(loadCurrentSuccess(currentAccounts)))
            .catch(error => console.log(error))
    }
}
