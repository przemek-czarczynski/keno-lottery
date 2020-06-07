import React, {useState, useEffect} from 'react';
import {TilesContext} from  '../context/TilesContext';
import {useStyles} from '../styles/styles';


const StakeInput = ()=> {
  const [state, setState] = React.useContext(TilesContext);
  const [inputValue, setInputValue] = useState(state.stakeInputValue.toString());
  const classes = useStyles();

  useEffect(()=>{
          if(state.completed) {
                  setState(state => ({...state, completed:false , stakeInputValue: 0 })); 
                  setInputValue("0");

          }
  },[state])
  const handleChange = (e)=>{
    let str = e.target.value;
    
    if (str === "") {
      setInputValue("");
      return
    }

    let xkey = e.target.value;
   
    let key = xkey.split('')
    key = key.slice(-1)
     
    if (parseInt(key[0]) >= 0 && parseInt(key[0]) <= 9) {
      // str = str + key;
      setInputValue(str);
      setState(state => ({...state, stakeValue: parseInt(str), stakeInputValue: parseInt(str) })); 
    }
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const handleFocus = ()=> {
    let stakes = state.stakes;
    const newStakes = stakes.map(item=> ({id:item.id, selected:false}));
    setState(state => ({...state, stakeValue: 0 , stakes: newStakes })); 
    setInputValue("");
  }

  const handleOnBlur = ()=>{
    if (inputValue === "") {setInputValue("0")};
  }

  return (
    <div ><form onSubmit={handleSubmit}><input className={classes.input} onChange={handleChange} onFocus={handleFocus} onBlur={handleOnBlur} value={inputValue} ></input></form></div>
  )
}

export default StakeInput;