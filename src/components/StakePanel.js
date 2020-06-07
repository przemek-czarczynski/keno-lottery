import React from 'react';
import StakeBtn from './StakeBtn';
import StakeInput from './StakeInput';
import {useStyles} from '../styles/styles';

const StakePanel = ()=> {
  const classes = useStyles();
  

  return (
   
    <div className={classes.stakePanel}>
      <StakeBtn id={0} value={50}/>
      <StakeBtn id={1} value={100}/>
      <StakeBtn id={2} value={200}/>
      <StakeBtn id={3} value={500}/>
      <StakeBtn id={4} value={1000}/>
      
      <StakeInput/>
    </div>
  
  )
}

export default StakePanel;