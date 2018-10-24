import React from 'react';
import {withStyles} from "@material-ui/core";
import TextInput from "../../../../../UI/TextInput/TextInput";
import AccountNumberInput from "../../../../../UI/AccountNumberInput/AccountNumberInput";
import Switch from "@material-ui/core/Switch/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import TextSelect from "../../../../../UI/TextSelect/TextSelect";

const styles = theme => ({
    root: {
        display: 'inline',
        flexWrap: 'wrap',
    }
});

const RecipientDetails = ({classes, recipientPreset, recipientName, recipientAccount, partners, toSaveRecipient, onChange, errors}) => {

    const frequentPartners = (
        <div>
            <TextSelect
                name="recipientPreset"
                label="Choose a frequent partner..."
                value={recipientPreset}
                textList={partners.partners}
                onChange={onChange}
            />
        </div>
    );

    return (
        <form className={classes.root}>
            {!recipientPreset && frequentPartners}
            <TextInput
                value={recipientName}
                name={"recipientName"}
                label={"First-name Last-name"}
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
            {!recipientPreset &&
            <FormControlLabel
                control={<Switch
                    name={"toSaveRecipient"}
                    value="toSaveRecipient"
                    checked={toSaveRecipient}
                    onChange={onChange}
                />}
                label="Save to partners"
            />}
        </form>
    );
};

export default withStyles(styles)(RecipientDetails);