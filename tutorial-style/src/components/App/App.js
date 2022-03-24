import React from 'react';
import { createUseStyles } from 'react-jss';

import Alert from '../Alert/Alert';
import Success from '../Success/Success';


const useStyles = createUseStyles({
    wrapper: {
     padding: 20,
    }
    });
    
    
function App() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <Alert title="Login Failed" type="error">
                <div>User not found.</div>
            </Alert>
            <Success />
        </div>
)

}
export default App;
