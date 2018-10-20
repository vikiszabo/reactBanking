import React from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

const TransferSummary = ({transferDetails}) => {

    const timing = new Date(transferDetails.timing);

    const info = [
        {label: "Recipient's name", value: transferDetails.recipientName},
        {label: "Recipient's account", value: transferDetails.recipientAccount},
        {label: "Amount to transfer", value: transferDetails.ccy + " " + transferDetails.amount},
        {label: "Transfer schedule", value: transferDetails.transferNow ? "Now" : timing.toLocaleString()}
    ];

    return (
        <Paper>
            <Table>
                <TableBody>
                    {info.map(info => {
                        return (
                            <TableRow key={info.label}>
                                <TableCell>
                                    {info.label}
                                </TableCell>
                                <TableCell>
                                    {info.value}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

TransferSummary.propTypes = {};

export default TransferSummary;