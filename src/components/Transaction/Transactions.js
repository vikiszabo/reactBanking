import React, {Component} from 'react';
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Paper from "@material-ui/core/Paper/Paper";
import {navigate} from "@reach/router";
import Button from "@material-ui/core/Button/Button";
import Loader from "../UI/Loader/Loader";

class Transactions extends Component {

    componentWillMount() {
        this.props.fetchTransactions();
    }

    onClick = (id) => {
        navigate("/transactions/" + id)
    };

    navigateToNewTransaction = (e) => {
        e.preventDefault();
        navigate("/new-transaction")
    };

    render() {
        const {transactions, loading, error} = this.props.transactions;

        if (loading) {
            return (
                <Loader message={"Loading transactions..."} />
            )
        } else if (error) {
            return (
                <div>Oops, error :/</div>
            )
        }

        return (
            <div>
                <h2>
                    Transaction history
                </h2>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Recipient</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Currency</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map(txn => {
                                return (
                                    <TableRow hover key={txn.id} onClick={() => {
                                        this.onClick(txn.id)
                                    }}>
                                        <TableCell>
                                            {txn.recipientName}
                                        </TableCell>
                                        <TableCell>
                                            {txn.amount}
                                        </TableCell>
                                        <TableCell>
                                            {txn.ccy}
                                        </TableCell>
                                        <TableCell>
                                            {txn.date}
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
                        onClick={this.navigateToNewTransaction}
                    > New transaction </Button>
                </Paper>
            </div>
        );
    }
}

export default Transactions;
