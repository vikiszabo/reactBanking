export const validateAccountNumber = (accountNumber) => {
    if (!accountNumber) return "Required";

    if (accountNumber.slice(-1) === ' ') {
        return "Has to be 16 digits"
    }

    return false;
};

export const validateAmount = (amount) => {

    if (amount === "0") {
        return "Amount should be larger than 0";
    }

    if (!amount) {
        return "Required";
    }

    return false;
};

export const validateName = (name) => {

    if (/\d/.test(name)) {
        return "Name should not contain numbers"
    }

    var invalidChars = /[!@#^&*()_={}[\]\\|:;+`•Ż∆&$ķ©ń∂ß|«»ć–;––…•Ż∆ķ©ń∂ß@ę¶€ę¶€ę†¶€ź†“‘<>,?]/;

    if (name.match(invalidChars)) {
        return "Contains invalid character(s)"
    }

    if (!name) {
        return "Required"
    }

    return false;
};

export const validateTime = (time) => {
    const today = new Date();
    const inputDate = new Date(time);

    if (isNaN(inputDate)) {
        return 'Invalid date'
    }

    if (inputDate < today) {
        return "Choose a future date"
    }

};
