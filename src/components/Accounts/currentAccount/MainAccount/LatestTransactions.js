import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(tdate, tdescription, tamount, curr) {
    id += 1;
    return { id, tdate, tdescription, tamount, curr };
}

const rows = [
    createData('12/10/2018', 'withdrawal', 100, 'USD'),
    createData('1/9/2018', 'deposit', 300, 'EUR'),
    createData('12/8/2018', 'ecommerce', 145500, 'HUF'),
    createData('12/7/2018', 'withdrawal', 300, 'GBP'),

];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell numeric>Amount</TableCell>
                        <TableCell>Currency</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.tdate}
                                </TableCell>
                                <TableCell>{row.tdescription}</TableCell>
                                <TableCell numeric>{row.tamount}</TableCell>
                                <TableCell>{row.curr}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
