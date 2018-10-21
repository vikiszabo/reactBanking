import * as actions from "./actions"
import * as axios from "axios";
import {toastr} from "react-redux-toastr";

const partnersURL = "http://localhost:8000/partners";


function fetchPartnersSuccess(partners) {
    return {
        type: actions.FETCH_PARTNERS_SUCCESS,
        payload: partners
    };
}

function fetchPartnersFailure(error) {
    return {
        type: actions.FETCH_PARTNERS_FAILURE,
        payload: error
    };
}

export const fetchPartners = (dispatch) => {
    axios.get(partnersURL)
        .then((partners)=> dispatch(fetchPartnersSuccess(partners)))
        .catch((error)=> dispatch(fetchPartnersFailure(error)));

    return {
        type: actions.FETCH_PARTNERS
    }
};

function createPartnerSuccess() {
    toastr.info('Recipient saved to frequent partners');
    return {
        type: actions.CREATE_TRANSACTION_SUCCESS
    };
}


function createPartnerFailure(error) {
    toastr.error('Could not save partner');
    return {
        type: actions.CREATE_TRANSACTION_FAILURE,
        payload: error
    };
}

export const createPartner = (dispatch, partner) => {
    axios.post(partnersURL, partner)
        .then(() => dispatch(createPartnerSuccess()) )
        .catch((error) => dispatch(createPartnerFailure(error)));

    return {
        type: actions.CREATE_PARTNER
    }
};

