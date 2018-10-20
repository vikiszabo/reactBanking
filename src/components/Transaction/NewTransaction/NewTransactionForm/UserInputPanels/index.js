import PaymentDetails from "./PaymentDetail/PaymentDetails";
import RecipientDetails from "./RecipientDetail/RecipientDetails";
import OtherDetails from "./OtherDetail/OtherDetails";
import TransferSummary from "./TransferSummary/TransferSummary";
import React from 'react';


export const getUserInputPanels = (state, onChange) => {

    const panels = [
        <PaymentDetails
            amount={state.amount}
            ccy={state.ccy}
            onChange={onChange}
            errors={state.errors}
        />,
        <RecipientDetails
            recipientName={state.recipientName}
            toSaveRecipient={state.toSaveRecipient}
            recipientAccount={state.recipientAccount}
            onChange={onChange}
            errors={state.errors}
        />,
        <OtherDetails
            toSaveToTemplate={state.toSaveToTemplate}
            transferNow={state.transferNow}
            timing={state.timing}
            onChange={onChange}
            errors={state.errors}
        />,
        <TransferSummary
            transferDetails={state}
        />
    ];

    return panels;
};