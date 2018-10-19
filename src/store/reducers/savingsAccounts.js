const savingsAccounts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_SAVINGS_ACCOUNTS':
            return action.savingsAccount;
        default:
            return state;
    }
};

export default savingsAccounts;