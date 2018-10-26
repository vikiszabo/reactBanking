import * as actions from "../actions/actions"


const INIT_STATE = {
    partnerList: {partners: [], error: null, loading: false}
};

const partners = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_PARTNERS:
            return {...state, partnerLis: {partners: [], error: null, loading: true}};
        case actions.FETCH_PARTNERS_SUCCESS:
            return {...state, partnerList: {partners: action.payload, error: null, loading: false}};
        case actions.FETCH_PARTNERS_FAILURE:
            return {...state, partnerList: {partners: [], error: action.payload, loading: false}};
        default:
            return state;
    }
};

export default partners;