import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import FormControl from "@material-ui/core/FormControl/FormControl";
import {withStyles} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        marginLeft: theme.spacing.unit,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});


const TextSelect = ({classes, name, label, onChange, onFocus, placeholder, value, textList}) => {
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="textSelect">{label}</InputLabel>
            <Select
                autoWidth={true}
                variant="outlined"
                value={value}
                onChange={onChange}
                inputProps={{
                    id: 'textSelect',
                }}
                input={
                    <OutlinedInput
                        label={label}
                        id="textSelect"
                        name={name}
                        labelWidth={120}
                    />
                }
            >
                {textList.map(item => {
                    return (
                        <MenuItem key={item.id} value={item}>
                            {item.name}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
};

TextSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    textList: PropTypes.array
};

export default withStyles(styles)(TextSelect);