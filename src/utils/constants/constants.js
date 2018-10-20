import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const currencies = [
    {
        "value": "USD",
        "label": "$"
    },
    {
        "value": "EUR",
        "label": "€"
    },
    {
        "value": "BTC",
        "label": "฿"
    },
    {
        "value": "JPY",
        "label": "¥"
    }
];

export const navlinks = [
    {"icon": <FontAwesomeIcon icon="list" size="lg" />, "label": "Transactions", "url": "/transactions"},
    {"icon": <FontAwesomeIcon icon="plus" size="lg"/>, "label": "New Transaction", "url": "/new-transaction"},
    {"icon": <FontAwesomeIcon icon="ghost" size="lg" />, "label": "Send", "url": "/"},
    {"icon": <FontAwesomeIcon icon="ghost" size="lg"/>, "label": "Drafts", "url": "/"}
];