import {validateAccountNumber, validateAmount, validateName, validateTime} from "../../../../../utils/validators";


export const validateNewTransferForm = (state) => {

    let errors = {};
    switch (state.activeStep) {
        case 0:
            if (validateName(state.recipientName)) {
                errors.recipientName = validateName(state.recipientName)
            }

            if (validateAccountNumber(state.recipientAccount)) {
                errors.recipientAccount = validateAccountNumber(state.recipientAccount)
            }
            break;
        case 1:
            if (validateAmount(state.amount)) {
                errors.amount = validateAmount(state.amount)
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
            break;
    }

    return errors;
};

export default validateNewTransferForm;
