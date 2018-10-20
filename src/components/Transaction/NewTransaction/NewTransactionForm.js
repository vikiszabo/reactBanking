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
import PaymentDetails from "./Steps/PaymentDetail/PaymentDetails";
import RecipientDetails from "./Steps/RecipientDetail/RecipientDetails"
import OtherDetails from "./Steps/OtherDetail/OtherDetails"
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import {validateAccountNumber, validateAmount, validateName, validateTime} from "../../../utils/validators";
import TransferSummary from "./Steps/TransferSummary";

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
        switch (e.target.name) {
            case "toSaveToTemplate":
                this.setState({
                    [e.target.name]: e.target.checked
                });
                return;
            case "toSaveRecipient":
                this.setState({
                    [e.target.name]: e.target.checked
                });
                return;
            case "transferNow":
                this.setState({
                    [e.target.name]: e.target.checked
                });
                return;
            default:
                this.setState({
                    [e.target.name]: e.target.value
                });
                return;
        }
    };


    handleNext = () => {
        let errors = {};
        switch (this.state.activeStep) {
            case 0:
                if (validateAmount(this.state.amount)) {
                    errors.amount = validateAmount(this.state.amount)
                }
                break;
            case 1:
                if (validateName(this.state.recipientName)) {
                    errors.recipientName = validateName(this.state.recipientName)
                }

                if (validateAccountNumber(this.state.recipientAccount)) {
                    errors.recipientAccount = validateAccountNumber(this.state.recipientAccount)
                }
                break;
            case 2:
                if (!this.state.transferNow) {
                    if (validateTime(this.state.timing)) {
                        errors.timing = validateTime(this.state.timing)
                    }
                }
                break;
            default:
                console.log(this.state.activeStep)
        }

        this.setState({errors: errors}, ()=> {
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
        const stepContents = [
            <PaymentDetails
                amount={this.state.amount}
                ccy={this.state.ccy}
                onChange={this.onChange}
                errors={this.state.errors}
            />,
            <RecipientDetails
                recipientName={this.state.recipientName}
                toSaveRecipient={this.state.toSaveRecipient}
                recipientAccount={this.state.recipientAccount}
                onChange={this.onChange}
                errors={this.state.errors}
            />,
            <OtherDetails
                toSaveToTemplate={this.state.toSaveToTemplate}
                transferNow={this.state.transferNow}
                timing={this.state.timing}
                onChange={this.onChange}
                errors={this.state.errors}
            />,
            <TransferSummary
                transferDetails={this.state}
            />
        ];

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
