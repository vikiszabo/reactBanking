import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "@reach/router";

function mapStateToProps(state) {
    return {transactions: state.transactions};
}

class Transactions extends Component {

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
                <Link to="/new-transaction">New transaction</Link>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Transactions);
