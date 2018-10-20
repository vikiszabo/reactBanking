import React from 'react';
import {withStyles} from "@material-ui/core";
import TextInput from "../../../../UI/TextInput";
import AccountNumberInput from "../../../../UI/AccountNumberInput";
import Switch from "@material-ui/core/Switch/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";

const styles = theme => ({
    root: {
        display: 'inline',
        flexWrap: 'wrap',
    }
});

const RecipientDetails = ({classes, recipientName, recipientAccount, toSaveRecipient, onChange, errors}) => (
    <div className={classes.root}>
        <TextInput
            value={recipientName}
            name={"recipientName"}
            label={"Firstname Lastname"}
            onChange={onChange}
            error={errors.recipientName}
        />
        <AccountNumberInput
            value={recipientAccount}
            onChange={onChange}
            label={"Account number"}
            name="recipientAccount"
            error={errors.recipientAccount}
        />
        <FormControlLabel
            control={<Switch
                name={"toSaveRecipient"}
                value="toSaveRecipient"
                checked={toSaveRecipient}
                onChange={onChange}
            />}
            label="Save to partners"
        />
    </div>
);

export default withStyles(styles)(RecipientDetails);