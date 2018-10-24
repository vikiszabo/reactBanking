import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import {withStyles} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl/FormControl";
import AmountFormat from '../../../utils/formatters/AmountFormat'


const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        minWidth: 60,
        display: "inline"
    },
});



const AmountInput = ({classes, name, label, onChange, onBlur, onFocus, placeholder, value, error, ccy}) => {
    return (
        <FormControl className="field">
            <input type="text"/>
            <TextField
                className={classes.textField}
                fullWidth
                label={label}
                error={error !== undefined}
                helperText={error}
                variant="outlined"
                name={name}
                placeholder={placeholder}
                value={value}
                onFocus={onFocus}
                onChange={onChange}
                InputProps={{
                    inputComponent: AmountFormat,
                    startAdornment: <InputAdornment position="start">{ccy}</InputAdornment>,
                }}/>
        </FormControl>
    );
};

AmountInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    ccy: PropTypes.string
};

export default withStyles(styles)(AmountInput);