import React from 'react';
import { createUseStyles } from 'react-jss';
import Alert from '../Alert/Alert';

const useStyles = createUseStyles({

    user: {},

    wrapper: {
     display: 'flex',
     flexWrap: 'wrap',
     '& h2': {
     width: '100%'
     },

    '& $user': {
        fontSize: 50
        }
    }
})

export default function Success() {
       
    const classes = useStyles();

    return(
        <Alert title="User logged in" type="success">
            <div className={classes.wrapper}>
                    <p className={classes.user}>You have been logged in.</p>
            </div>
        </Alert>
    )
}