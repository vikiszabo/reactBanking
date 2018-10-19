const currentAccounts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CURRENT_ACCOUNTS':
            return action.currentAccounts;
        default:
            return state;
    }
};

export default currentAccounts;