import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Button from "@material-ui/core/Button/Button";
import {navigate} from "@reach/router";
import Loader from "../../UI/Loader/Loader";

class TransactionDetail extends Component {

    componentWillMount() {
        this.props.fetchTransaction(this.props.id);
    }

    navigateToTransactionHistory = () => {
        navigate("/transactions")
    };

    render() {
        const {transaction, loading, error} = this.props.transaction;

        if (loading) {
            return (
                <Loader message={"Loading transaction details..."}/>
            )
        } else if (error) {
            return (
                <div>Oops, error :/</div>
            )
        }


        return (
            <div>
                <h2>Transaction details:</h2>
                <Paper>

                    <Table>
                        <TableBody>
                            {Object.keys(transaction).map(key => {
                                return (
                                    <TableRow key={key}>
                                        <TableCell>
                                            {key}
                                        </TableCell>
                                        <TableCell>
                                            {transaction[key]}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>

                    </Table>
                </Paper>
                <br/>
                <Paper>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.navigateToTransactionHistory}
                    > Back to transaction history</Button>
                </Paper>
            </div>
        );
    }
}

export default TransactionDetail;