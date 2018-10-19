import React  from 'react';
import PropTypes from 'prop-types';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";


const CurrencySelect = ({name, label, onChange, onFocus, placeholder, value, error}) => {
    let wrapperClass = 'form-group';

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    return (
        <div className={wrapperClass}>
            <div className="field">
                <InputLabel htmlFor="currency">{label}</InputLabel>
                <Select
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    inputProps={{
                        id: 'ccy-input',
                    }}
                    input={
                        <OutlinedInput
                            fullWidth
                            id="currency"
                            name={name}
                            error={error !== undefined}
                            labelWidth={100}
                        />
                    }
                    >
                    {currencies.map(ccy => {
                        return (
                            <MenuItem key={ccy.label} value={ccy.label}>
                                {ccy.value}
                            </MenuItem>
                        )
                    })}
                </Select>
            </div>
        </div>
    );
};

CurrencySelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

export default CurrencySelect;