import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "@reach/router";
import MainAccount from './MainAccount/MainAccount';


function mapStateToProps(state) {
    return {currentAccounts: state.currentAccounts};
}

class CurrentAccounts extends Component {

    render() {
        return (
            <div>
                <h2>My Current Account:</h2>
                <MainAccount />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(CurrentAccounts);
