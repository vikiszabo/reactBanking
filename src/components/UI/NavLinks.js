import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendSharp from '@material-ui/icons/Search';
import DraftsIcon from '@material-ui/icons/Drafts';
import Add from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import {Link} from "@reach/router";

export default function () {
    const links = [
        {icon: <SendSharp/>, label: "Transactions", url: "/transactions"},
        {icon: <Add/>, label: "New Transaction", url: "/new-transaction"},
        {icon: <SendIcon/>, label: "Savings Accounts", url: "/savingsaccount"},
        {icon: <Add/>, label: "New Savings Account", url: "/new-savingsaccount"},
        {icon: <SendIcon/>, label: "Send", url: "/"},
        {icon: <DraftsIcon/>, label: "Drafts", url: "/"}
    ];
    return (
        <div>
            {links.map(link => {
                return (
                    <Link to={link.url} key={link.label}>
                        <ListItem button>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.label}/>
                        </ListItem>
                    </Link>
                )
            })}
        </div>
    )
}


