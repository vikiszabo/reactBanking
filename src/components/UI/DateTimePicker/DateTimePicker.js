import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    icon: {
        marginRight: theme.spacing.unit,
        color: 'grey'
    }
});

function DateTimePicker(props) {
    const { classes, value, label, onChange, name, error } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                fullWidth
                variant={"outlined"}
                id="time"
                name={name}
                value={value}
                label={label}
                error={error !== undefined}
                helperText={error}
                type="datetime-local"
                onChange={onChange}
                className={classes.textField}
                InputProps={{
                    startAdornment: <FontAwesomeIcon
                        icon="calendar-alt"
                        size="lg" className={classes.icon}/>,
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

DateTimePicker.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default withStyles(styles)(DateTimePicker);
