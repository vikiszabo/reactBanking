import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

const Loader = ({message}) => {
    return (
        <div>
            <Typography>{message}</Typography>
            <LinearProgress/>
        </div>
    );
};

export default Loader;