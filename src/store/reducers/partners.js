const partners = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PARTNERS':
            return action.partners;
        default:
            return state;
    }
};

export default partners;