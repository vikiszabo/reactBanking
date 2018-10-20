import React from 'react';
import AmountInput from "../../../../../UI/AmountInput/AmountInput";
import CurrencySelect from "../../../../../UI/CurrencySelect/CurrencySelect";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'inline',
        flexWrap: 'wrap',
    }
});

 const PaymentDetails = ({classes, ccy, amount, onChange, errors, onBlur}) =>(
        <div className={classes.root}>
            <CurrencySelect
                name="ccy"
                label="Currency"
                value={ccy}
                onChange={onChange}
            />
            <AmountInput
                error={errors.amount}
                name="amount"
                value={amount}
                ccy={ccy}
                label="Amount"
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );


export default withStyles(styles)(PaymentDetails);
