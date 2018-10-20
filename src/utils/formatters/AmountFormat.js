import React from "react";
import NumberFormat from "react-number-format"
import PropTypes from 'prop-types';


function AmountFormat(props) {
    const { inputRef, onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onChange={onChange}
            thousandSeparator
        />
    );
}

AmountFormat.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AmountFormat;