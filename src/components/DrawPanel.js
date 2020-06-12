import React from 'react';
import {useStyles} from '../styles/styles';
import DrawResult from './DrawResult';

const DrawPanel = ()=>{
  const classes = useStyles();

  return (
    <div className={classes.drawPanel}>
      DrawPanel
      <DrawResult/>
    </div>
  )
}

export default DrawPanel;