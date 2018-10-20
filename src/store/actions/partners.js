const partnersURL = "http://localhost:8000/partners";


export function loadPartnersSuccess(partners) {
    return {
        type: 'LOAD_PARTNERS',
        partners
    }
}

export function loadPartners() {
    return function (dispatch) {
        return fetch(partnersURL)
            .then(response => response.json())
            .then(partners => dispatch(loadPartnersSuccess(partners)))
            .catch(error => console.log(error))
    }
}