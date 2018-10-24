import PaymentDetails from "./PaymentDetail/PaymentDetails";
import RecipientDetails from "./RecipientDetail/RecipientDetails";
import OtherDetails from "./OtherDetail/OtherDetails";
import TransferSummary from "./TransferSummary/TransferSummary";
import React from 'react';


export const getUserInputPanels = (state, partners, onChange) => {

    const panels = [
        <RecipientDetails
                recipientName={state.recipientName}
                toSaveRecipient={state.toSaveRecipient}
                recipientAccount={state.recipientAccount}
                partners={partners}
                recipientPreset={state.recipientPreset}
                onChange={onChange}
                errors={state.errors}
        />,
        <PaymentDetails
            amount={state.amount}
            ccy={state.ccy}
            onChange={onChange}
            errors={state.errors}
        />,
        <OtherDetails
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
}