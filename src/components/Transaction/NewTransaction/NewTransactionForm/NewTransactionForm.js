import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {getUserInputPanels} from "./UserInputPanels/UserInputPanels";
import validateNewTransferForm from "./ValidateNewTransferForm/validateNewTransferForm";
import Loader from "../../../UI/Loader/Loader";


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
    return ['Recipient details', 'Payment details', 'Other details', 'Transfer Summary'];
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
            transferNow: 'True',
            timing: '',
            recipientPreset: false,
            transferDate:''
        };
    }

    componentWillMount() {
        this.props.fetchPartners();
    }

    onChange = (e) => {
        if (e.target.name === "toSaveToTemplate" ||
            e.target.name === "toSaveRecipient" ||
            e.target.name === "transferNow") {
            this.setState({
                [e.target.name]: e.target.checked
            });
        } else if (e.target.name === "recipientPreset"){
            this.setState({
                recipientPreset: true,
                recipientName: e.target.value.name,
                recipientAccount: e.target.value.account
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    };

    handleNext = () => {

        if (this.state.activeStep === getSteps().length - 1) {
            this.handleTransfer()
        }

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

    handleTransfer = () => {

        const newTransaction = {
            amount: this.state.amount,
            recipientName: this.state.recipientName,
            recipientAccount: this.state.recipientAccount,
            ccy: this.state.ccy,
            timing: this.state.timing
        };
        this.props.createTransaction(newTransaction);

        if (this.state.toSaveRecipient) {
            const recipientToSave = {
                name: this.state.recipientName,
                account: this.state.recipientAccount
            };
            this.props.createPartner(recipientToSave);
        }
    };

    render() {
        const {classes, newTransaction, partners} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;
        const stepContents = getUserInputPanels(this.state, partners, this.onChange);

        if (newTransaction.error) {
            return (
                <div>Oops, something went wrong....</div>
            )
        }

        return (
            <div className={classes.root}>
                <h2>New transfer form: </h2>
                <Paper>
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
                </Paper>
                {activeStep === steps.length && (newTransaction.loading) && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Loader message={"Transferring funds..."}/>
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
