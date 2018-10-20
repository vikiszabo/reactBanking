import React from "react";
import NumberFormat from "react-number-format"
import PropTypes from 'prop-types';


function AccountFormat(props) {
    const { inputRef, onChange, ...other } = props;


    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onChange={onChange}
            format={"#### - #### - #### - ####"}
        />
    );
}

AccountFormat.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AccountFormat;