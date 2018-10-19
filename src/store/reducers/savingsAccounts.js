const savingsAccounts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_SAVINGSACCOUNTS':
            return action.savingsAccount;
        default:
            return state;
    }
};

export default savingsAccounts;