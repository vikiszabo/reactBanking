
const svaURL = "http://localhost:8000/savingsaccount";

export function loadSavingsSuccess(savings) {
    return {
        type: 'LOAD_SAVINGS',
        savings: savings
    }
}

export function loadSavings() {
    return function (dispatch) {
        return fetch(svaURL)
            .then(response => response.json())
            .then(savings => dispatch(loadSavingsSuccess(savings)))
            .catch(error => console.log(error))
    }
}
