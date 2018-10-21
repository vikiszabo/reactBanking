import {connect} from 'react-redux';
import Transactions from "../../../components/Transaction/Transactions";
import {fetchTransactions} from "../../actions/transactions";
import {sortByDate} from "../../../utils/utilMethods/utilMethods";

const mapStateToProps = (state) => {
    let transactions = state.transactions.transactionList;
    transactions.transactions = sortByDate(transactions.transactions);
    return {
        transactions: transactions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTransactions: () => {
            dispatch(fetchTransactions(dispatch));
        }
    }
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Transactions);