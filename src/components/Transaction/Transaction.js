import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {transactions: state.transactions};
}

class Transaction extends Component {

    render() {
        return (
            <div>
                <h2>Transactions:</h2>
                <ul>
                    {this.props.transactions.map(txn => {
                        return (
                            <li key={txn.id}> {txn.id} {txn.sender} {txn.recipient} </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Transaction);
