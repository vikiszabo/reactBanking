import {connect} from 'react-redux';
import TransactionDetail from "../../../components/Transaction/TransactionDetail/TransactionDetail";
import {fetchTransaction} from "../../actions/transactions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTransaction: id => dispatch(fetchTransaction(id))
    };
};

const mapStateToProps = (state) => {
    return {
        transaction: state.transactions.activeTransaction
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(TransactionDetail);