import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import {withStyles} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl/FormControl";
import AmountFormat from './AmountFormat'


const styles = theme => ({
    formControl: {
        minWidth: 120,
        display: "inline"
    },

});


const AmountInput = ({classes, name, label, onChange, onFocus, placeholder, value, error, ccy}) => {
    return (
        <FormControl className="field">
            <TextField
                fullWidth
                label={label}
                error={error !== undefined}
                helperText={error}
                variant="outlined"
                // type="text"
                name={name}
                className={classes.formControl}
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