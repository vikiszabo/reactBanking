import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import {getUserInputPanels} from "./UserInputPanels/UserInputPanels";
import {validateNewTransferForm} from "../../../../utils/validators/validateNewTransferForm";


const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});

function getSteps() {
    return ['Payment details', 'Recipient details', 'Other details', 'Transfer Summary'];
}

class VerticalLinearStepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            errors: {},
            account: '',
            amount: "1000",
            ccy: '$',
            recipientName: '',
            recipientAccount: '',
            toSaveRecipient: false,
            toSaveToTemplate: false,
            transferNow: 'True',
            timing: ''
        };
    }

    onChange = (e) => {
        if (e.target.name === "toSaveToTemplate" ||
            e.target.name === "toSaveRecipient" ||
            e.target.name === "transferNow") {
            this.setState({
                [e.target.name]: e.target.checked
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    };

    handleNext = () => {

        const errors = validateNewTransferForm(this.state);

        this.setState({errors: errors}, () => {
            if (Object.keys(this.state.errors).length === 0) {
                this.setState(state => ({
                    activeStep: state.activeStep + 1,
                }));
            }
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };


    render() {
        const {classes} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;
        let stepContents = getUserInputPanels(this.state, this.onChange);

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <div>
                                        {stepContents[index]}
                                    </div>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Transfer' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>Transferring in progress...</Typography>
                        <LinearProgress/>
                    </Paper>
                )}
            </div>
        );
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
