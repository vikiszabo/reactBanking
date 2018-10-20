import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "@reach/router";
import * as constants from "../../../utils/constants/constants"


export default function () {
    const links = constants.navlinks;
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


