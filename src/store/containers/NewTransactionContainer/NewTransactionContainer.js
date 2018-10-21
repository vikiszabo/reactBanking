import {connect} from 'react-redux';
import NewTransactionForm from "../../../components/Transaction/NewTransaction/NewTransactionForm/NewTransactionForm";
import {createTransaction} from "../../actions/transactions";
import {createPartner, fetchPartners} from "../../actions/partners";

const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: (transaction) => {dispatch(createTransaction(dispatch, transaction))},
        createPartner: (partner) => {dispatch(createPartner(dispatch, partner))},
        fetchPartners: () => {dispatch(fetchPartners(dispatch))}
    };
};

const mapStateToProps = (state) => {
    return {
        newTransaction: state.transactions.newTransaction,
        partners: state.partners.partnerList
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(NewTransactionForm);