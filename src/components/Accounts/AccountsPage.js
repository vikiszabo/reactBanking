import React, {Component} from 'react';
import {connect} from 'react-redux';
import CurrentAccountToggle from './currentAccount/CurrentAccountToggle';
import SavingsAccountToggle from './SavingsAccount/SavingsAccountToggle';


function mapStateToProps(state) {
    return {accounts: state.accounts};
}

class AccountsPage extends Component {

    render() {
        return (
            <div>
                <h2>Accounts:</h2>

                        <div className="rowC">
                            <CurrentAccountToggle />
                            <SavingsAccountToggle />
                        </div>

                <ul>
                    {this.props.accounts.map(account => {
                        return (
                            <li key={account.id}> {account.id} </li>
                        )
                    })}
                </ul>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AccountsPage);
