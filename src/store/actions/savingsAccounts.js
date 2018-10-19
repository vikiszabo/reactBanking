
const svaURL = "http://localhost:8000/savingsaccount";

export function loadSavingsSuccess(savingsAccounts) {
    return {
        type: 'LOAD_SAVINGS_ACCOUNTS',
        savingsAccounts: savingsAccounts
    }
}

export function loadSavingsAccounts() {
    return function (dispatch) {
        return fetch(svaURL)
            .then(response => response.json())
            .then(savingsAccounts => dispatch(loadSavingsSuccess(savingsAccounts)))
            .catch(error => console.log(error))
    }
}
