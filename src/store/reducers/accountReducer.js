const accounts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ACCOUNTS':
            return action.accounts;
        default:
            return state;
    }
};

export default accounts;