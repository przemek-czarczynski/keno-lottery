import React from 'react';
import {TilesContext} from  '../context/TilesContext';
import {useStyles} from '../styles/styles';

const Tile = ({id}) => {
    const [state, setState] = React.useContext(TilesContext);
    const classes = useStyles();

    let styles = (state.tiles[id].selected)? classes.selected : classes.tile;
    let styles2 = (state.tiles[id].selected) ? classes.selected : classes.tile2;

    const handleClick = (id)=>{
      
      let items = state.tiles;
      let countSelected = state.allSelected;

      countSelected = (items[id].selected) ? countSelected - 1 : countSelected + 1;
      
      if ( countSelected<=5 ) {

        items[id].selected = !items[id].selected;

        setState(state=>({...state, tiles : items, allSelected: countSelected }))
      } 
      else if ( countSelected = 5 && !items[id].selected ) {
        countSelected = (items[id].selected) ? countSelected - 1 : countSelected + 1;
      }
    }

  return (  
      <>
        {(id<40)? <div className={styles} key={id} onClick={()=>handleClick(id)}>{id+1}</div> :
        <div className={styles2} key={id} onClick={()=>handleClick(id)}><p>{id+1}</p></div>}
      </>
  );
}
 
export default Tile;