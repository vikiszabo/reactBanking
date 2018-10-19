import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "@reach/router";

function mapStateToProps(state) {
    return {currentAccounts: state.currentAccounts};
}

class CurrentAccounts extends Component {

    render() {
        return (
            <div>
                <h2>My Current Account:</h2>
                <ul>
                    {this.props.currentAccounts.map(cra => {
                        return (
                            <li key={cra.id}> {cra.id} </li>
                        )
                    })}
                </ul>
                <Link to="/bond-details">Bond Details</Link>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(CurrentAccounts);
