import React, {useState, useEffect} from 'react';
import {useStyles} from '../styles/styles';
import {TilesContext} from  '../context/TilesContext';


const DrawResult = ()=>{
  const classes = useStyles();
  

  const [state, setState] = React.useContext(TilesContext);
  const [drawedNumbers, setDrawedNumbers]= useState([]);
  let nr = [];  
  
  useEffect(()=>{
    if (state.startDraw) {
      if (drawedNumbers.length>0) { drawedNumbers.map(i=>nr.push(i))}
      if (drawedNumbers.length<5) { drawNumbers(nr)}
    }
  },[state.startDraw, drawedNumbers])
  
  const drawNumbers = (n)=> {

      function start() {
        let randomNr = 0;
        return new Promise((resolve, reject)=>{
          setTimeout(() => {
            do {
              randomNr = Math.floor(Math.random() * 79 + 1)
            }
            while (n.indexOf(randomNr)!==-1)
            
            n.push(randomNr)
            setDrawedNumbers(n)
            resolve(n)
          }, 1000);
        })
      }
    
      start()
      
  }  

  
 
  return (
    <div >
      {state.startDraw && <div>{drawedNumbers.map(item=><div className={classes.bila} key={item}><p>{item}</p></div>)}</div>}
    </div>
  )
}

export default DrawResult;