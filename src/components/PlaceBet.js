import React, {useState} from 'react';
import {TilesContext} from  '../context/TilesContext';
import {useStyles} from '../styles/styles';

const PlaceBet = ()=> {
  const [state, setState] = React.useContext(TilesContext);
  const classes = useStyles();
  const [styles, setStyles] = useState(classes.placeBetBtn)
  let {tiles, allSelected, stakeValue, stakes} = state;



  const handleClick =()=>{

    if (allSelected === 5 && stakeValue > 0) {
      alert(`CONGRATULATIONS!!! \n\nYou have successfully placed a bet on Keno Lottery`)
      clearPanel()
    }
    else {
      alert(`You have to pick 5 numbers and provide the stake. Please complete necessary details.`)
      
    }
  }

  const clearPanel =()=>{
    let items=tiles
    items.map(item => item.selected = false)

    const newTiles = tiles.map(item=> ({number:item.id, selected:false}));
    const newStakes = stakes.map(item=> ({id:item.id, selected:false}));
    
    setState(state => ({...state, tiles : items, stakeValue: 0 , stakes: newStakes, allSelected:0, stakeInputValue : 0, completed: true })); 
  
  }

  return (  
      <div className={styles} 
        onClick={handleClick} 
        onMouseMove={()=>{ setStyles(classes.placeBetBtnHover) }} 
        onMouseOut ={()=>{ setStyles(classes.placeBetBtn) }}
      >PlaceBet</div>
     )
}

export default PlaceBet;