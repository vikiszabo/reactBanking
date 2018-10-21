import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Paper from "@material-ui/core/Paper/Paper";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";


class Transactions extends Component {


    componentWillMount() {
        this.props.fetchTransactions();
    }

    render() {
        const {transactions, loading, error} = this.props.transactions;

        if (loading) {
            return (
                <div>
                    <div>Loading transactions...</div>
                    <LinearProgress/>
                </div>
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
                            {transactions.data.map(txn => {
                                return (
                                    <TableRow key={txn.id}>
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
            </div>
        );
    }
}

export default Transactions;
