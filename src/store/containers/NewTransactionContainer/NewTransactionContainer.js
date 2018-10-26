import {connect} from 'react-redux';
import NewTransactionForm from "../../../components/Transaction/NewTransaction/NewTransactionForm/NewTransactionForm";
import {createTransaction} from "../../actions/transactions";
import {createPartner, fetchPartners} from "../../actions/partners";

const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: transaction => dispatch(createTransaction(transaction)),
        createPartner: partner => dispatch(createPartner(partner)),
        fetchPartners: () => {dispatch(fetchPartners())}
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