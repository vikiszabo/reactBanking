import {validateAccountNumber, validateAmount, validateName, validateTime} from "./index";

export const validateNewTransferForm = (state) => {

    let errors = {};
    switch (state.activeStep) {
        case 0:
            if (validateAmount(state.amount)) {
                errors.amount = validateAmount(state.amount)
            }
            break;
        case 1:
            if (validateName(state.recipientName)) {
                errors.recipientName = validateName(state.recipientName)
            }

            if (validateAccountNumber(state.recipientAccount)) {
                errors.recipientAccount = validateAccountNumber(state.recipientAccount)
            }
            break;
        case 2:
            if (!state.transferNow) {
                if (validateTime(state.timing)) {
                    errors.timing = validateTime(state.timing)
                }
            }
            break;
        default:
            console.log(state.activeStep)
    }

    return errors;
};
