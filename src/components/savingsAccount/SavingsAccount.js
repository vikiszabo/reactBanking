import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "@reach/router";

function mapStateToProps(state) {
    return {savingsAccount: state.savingsAccount};
}

class SavingsAccount extends Component {

    render() {
        return (
            <div>
                <h2>Savings Account:</h2>
                <ul>
                    {this.props.savingsAccount.map(sva => {
                        return (
                            <li key={sva.id}> {sva.id} {sva.balance} </li>
                        )
                    })}
                </ul>
                <Link to="/add-saving">Add Saving</Link>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(SavingsAccount);
