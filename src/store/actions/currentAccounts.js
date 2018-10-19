const craURL = "http://localhost:8000/currentsaccount";

export function loadSavingsSuccess(currentAccounts) {
    return {
        type: 'LOAD_CURRENT_ACCOUNTS',
        savingsAccounts: currentAccounts
    }
}

export function loadCurrentAccounts() {
    return function (dispatch) {
        return fetch(svaURL)
            .then(response => response.json())
            .then(currentAccounts => dispatch(loadCurrentSuccess(currentAccounts)))
            .catch(error => console.log(error))
    }
}
