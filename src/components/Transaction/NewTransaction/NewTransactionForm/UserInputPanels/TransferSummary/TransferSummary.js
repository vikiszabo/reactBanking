import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";

const TransferSummary = ({transferDetails}) => {

    const info = [
        {label: "Recipient's name", value: transferDetails.recipientName},
        {label: "Recipient's account", value: transferDetails.recipientAccount},
        {label: "Amount to transfer", value: transferDetails.ccy + " " + transferDetails.amount},
    ];

    return (
        <Paper>
            <Table>
                {info.map(info => {
                   return (
                            <TableRow>
                                <TableCell>
                                    {info.label}
                                </TableCell>
                                <TableCell>
                                    {info.value}
                                </TableCell>
                            </TableRow>
                    )})}
            </Table>
        </Paper>
    );
};

TransferSummary.propTypes = {};

export default TransferSummary;