import * as actions from "./actions"
import * as axios from "axios";
import {toastr} from "react-redux-toastr";
import {urls} from "../../utils/constants/constants";


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

export const fetchPartners = () => async dispatch => {
    try {
        dispatch({type: actions.FETCH_PARTNERS});
        const {data: partners} = await axios.get(urls.partners);
        dispatch(fetchPartnersSuccess(partners))
    } catch (e) {
        dispatch(fetchPartnersFailure(e))
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

export const createPartner = partner => async dispatch => {
    try {
        dispatch({type: actions.CREATE_PARTNER});
        await axios.post(urls.partners, partner);
        dispatch(createPartnerSuccess())
    } catch (e) {
        dispatch(createPartnerFailure(e))
    }
};

