import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

function TimePicker(props) {
    const { classes, value, label, onChange, name } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                variant={"outlined"}
                id="time"
                name={name}
                value={value}
                label={label}
                type="time"
                onChange={onChange}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

TimePicker.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default withStyles(styles)(TimePicker);
