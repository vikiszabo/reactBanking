import React, {Component} from 'react';
import AmountInput from "../../../../UI/AmountInput";
import CurrencySelect from "../../../../UI/CurrencySelect";

function PaymentDetails({ccy, amount, onChange}) {
    return (
        <form>
            <CurrencySelect
                name="ccy"
                label="Currency"
                value={ccy}
                onChange={onChange}
            />
            <br/>
            <AmountInput
                name="amount"
                value={+amount}
                ccy={ccy}
                label="Amount"
                onChange={onChange}
            />
        </form>
    );
}

export default PaymentDetails;
