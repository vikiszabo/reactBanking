import React  from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";


const AmountInput = ({name, label, onChange, onFocus, placeholder, value, error, ccy}) => {
    let wrapperClass = 'form-group';

    return (
        <div className={wrapperClass}>
            <div className="field">
                <TextField
                    fullWidth
                    label={label}
                    error={error !== undefined}
                    helperText={error}
                    variant="outlined"
                    type="number"
                    name={name}
                    className="input"
                    placeholder={placeholder}
                    value={value}
                    onFocus={onFocus}
                    onChange={onChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{ccy}</InputAdornment>,
                    }}/>
            </div>
        </div>
    );
};

AmountInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.number,
    error: PropTypes.string,
    ccy: PropTypes.string
};

export default AmountInput;