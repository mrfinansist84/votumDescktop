import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.scss';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'relative',
            left: '35%',
            top: '30%',
            color: blue[800]
        }
    }),
);

export const Loader = () => {
    const classes = useStyles();

    return (
        <div className="container-loader">
            <CircularProgress
                size={200}
                thickness={2}
                className={classes.root}
            />
        </div>
    );
}