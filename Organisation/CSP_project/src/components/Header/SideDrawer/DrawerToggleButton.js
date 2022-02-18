import React from 'react';
import classes from  '../../common/common.css';

const drawerToggleButton = props => (
<button className={classes.toggle}>
    <div className={classes.button_line}/>
    <div className={classes.button_line}/>
    <div className={classes.button_line}/>
</button>
);

export default drawerToggleButton;