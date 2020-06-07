import React from 'react';
import {useStyles} from '../styles/styles';
import {TilesContext} from  '../context/TilesContext';


const StakeBtn = ({id,value})=> {
  const [state, setState] = React.useContext(TilesContext);
  const classes = useStyles();
  let selected = state.stakes[id].selected;
  let stakes = state.stakes;


  let stylesBtn = (selected) ? classes.stakeBtnSelected : classes.stakeBtn;

  const handleClick= ()=>{
    
    const newStakes = stakes.map(item=> ({id:item.id, selected:false}));
    newStakes[id].selected = !newStakes[id].selected;
    setState(state => ({...state, stakeValue: value , stakes: newStakes, stakeInputValue: 0, completed: true  }));  
  }

  return (
    <>
      <div className = {stylesBtn} onClick={()=>handleClick(id)}>{value}</div>
    </>
  )
}



export default StakeBtn;
