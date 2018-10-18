import React  from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";


const TextInput = ({name, label, onChange, onFocus, placeholder, value, error}) => {
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
                    type="text"
                    name={name}
                    className="input"
                    placeholder={placeholder}
                    value={value}
                    onFocus={onFocus}
                    onChange={onChange}/>
            </div>
        </div>
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

export default TextInput;