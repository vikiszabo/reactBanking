import React from 'react';
import PropTypes from 'prop-types';
import AccountFormat from "../../../utils/formatters/AccountFormat"
import TextField from "@material-ui/core/TextField/TextField";
import {withStyles} from "@material-ui/core";


const styles = theme => ({

    textField: {
        margin: theme.spacing.unit,
    },

});



const TextInput = ({classes, name, label, onChange, onFocus, placeholder, value, error}) => {
    return (
        <TextField
            fullWidth
            label={label}
            error={error !== undefined}
            helperText={error}
            variant="outlined"
            name={name}
            className={classes.textField}
            placeholder={placeholder}
            value={value}
            onFocus={onFocus}
            onChange={onChange}
            InputProps={{
                inputComponent: AccountFormat,
            }}/>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default withStyles(styles)(TextInput);