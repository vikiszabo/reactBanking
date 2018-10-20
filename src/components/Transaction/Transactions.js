import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";

function mapStateToProps(state) {
    return {transactions: state.transactions};
}


class Transactions extends Component {

    render() {
        return (
            <div>
                <Typography variant="headline">
                    Transaction history
                </Typography>
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
                            {this.props.transactions.map(txn => {
                                return (
                                    <TableRow>
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

export default connect(
    mapStateToProps,
)(Transactions);
