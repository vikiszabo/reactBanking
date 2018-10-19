const savingsAccounts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_SAVINGS_ACCOUNTS':
            return action.savingsAccounts;
        default:
            return state;
    }
};

export default savingsAccounts;