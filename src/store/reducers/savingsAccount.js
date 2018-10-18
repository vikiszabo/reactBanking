const savingsAccount = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_SAVINGS':
            return action.savingsAccount;
        default:
            return state;
    }
};

export default savingsAccount;