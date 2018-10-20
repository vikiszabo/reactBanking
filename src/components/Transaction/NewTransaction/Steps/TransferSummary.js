import React from 'react';
import PropTypes from 'prop-types';

const TransferSummary = ({transferDetails}) => {
    return (
        <div>
            {transferDetails.amount}
        </div>
    );
};

TransferSummary.propTypes = {

};

export default TransferSummary;