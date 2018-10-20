import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import {withStyles} from "@material-ui/core";
import DateTimePicker from "../../../../../UI/DateTimePicker/DateTimePicker";

const styles = theme => ({
    root: {
        display: 'inline',
        flexWrap: 'wrap',
    }
});

const OtherDetails = ({classes, timing,errors, toSaveToTemplate, transferNow, onChange}) => (
    <div className={classes.root}>

        <FormControlLabel
            control={<Switch
                name={"transferNow"}
                value="transferNow"
                checked={transferNow}
                onChange={onChange}
            />}
            label="Transfer now"
        />

        {!transferNow && (
            <DateTimePicker
                label={"Transfer time"}
                value={timing}
                name="timing"
                onChange={onChange}
                error={errors.timing}
            />
        )}

        <FormControlLabel
            control={<Switch
                name={"toSaveToTemplate"}
                value="toSaveToTemplate"
                checked={toSaveToTemplate}
                onChange={onChange}
            />}
            label="Save details to templates"
        />
    </div>
);

export default withStyles(styles)(OtherDetails);