import React, {useEffect}  from 'react';
import {TilesContext} from  '../context/TilesContext';
import {useStyles} from '../styles/styles';
import Tile from './Tile';
import StakePanel from './StakePanel';
import LuckyPick from './LuckyPick';
import PlaceBet from './PlaceBet';


const MainBoard = ()=> {

  const [state , setState]=React.useContext(TilesContext);
  const classes = useStyles();

  useEffect(()=>{ 
    let initTiles = [];
    for (let i=0; i<80 ; i++){
      initTiles.push({number : i, selected: false})      
    };
    
    setState(state => ({...state, tiles : initTiles }))

  },[])


  let tiles = state.tiles;

  return (
    <div className={classes.board}>
    <div className={classes.line}></div>  
      <div className={classes.tiles}>
      {tiles.map(item=>(
        <Tile key={item.number} id={item.number}/>
        ))}
      </div>

      <StakePanel/>
      <div className={classes.bottom}>
          <LuckyPick/>
          <PlaceBet/>
        </div>

    </div>
  )
}

export default MainBoard;