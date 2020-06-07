import React, {useState} from 'react';
import {TilesContext} from  '../context/TilesContext';
import {useStyles} from '../styles/styles';

const LuckyPick = ()=> {
  const [state, setState] = React.useContext(TilesContext);
  const classes = useStyles();
   const [styles, setStyles] = useState(classes.luckyBtn)



  const handleClick = ()=>{
    let items = state.tiles;
    items.map(item=> item.selected=false)
      for (let i=0; i<5; i++) {
        let randomNum = Math.floor(Math.random() * 79);
        items[randomNum].selected = true;
      }
      
        setState(state=>({...state, tiles : items, allSelected: 5 }))
  }

  return (
    <div className={styles} 
      onClick={handleClick}
      onMouseMove={()=>{ setStyles(classes.luckyBtnHover) }} 
      onMouseOut ={()=>{ setStyles(classes.luckyBtn) }}
      
      >Lucky Pick</div>
  )
}

export default LuckyPick;