import React  from 'react';
import PropTypes from 'prop-types';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import FormControl from "@material-ui/core/FormControl/FormControl";
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        display: 'block'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});



const CurrencySelect = ({classes, name, label, onChange, onFocus, placeholder, value}) => {

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
        }
    ];
    return (
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    autoWidth={true}
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    inputProps={{
                        id: 'ccy-input',
                    }}
                    input={
                        <OutlinedInput
                            label={label}
                            id="currency"
                            name={name}
                            labelWidth={0}
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
            </FormControl>
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

export default withStyles(styles)(CurrencySelect);