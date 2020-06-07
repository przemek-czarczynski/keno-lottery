import React, {useState} from 'react';

const TilesContext = React.createContext([{}, ()=>{}]);

const TilesContextProvider = (props)=>{

  const [state, setState] = useState({
    tiles: [],
    stakes: [
      { id : 0 , selected: false },
      { id : 1 , selected: false },
      { id : 2 , selected: false },
      { id : 3 , selected: false },
      { id : 4 , selected: false },
    ],
    stakeInputValue:0,
    stakeValue: 0,
    allSelected : 0,
    completed : false
  });

  return (
    <TilesContext.Provider value={[state,setState]}>
      {props.children}
    </TilesContext.Provider>
  )
}

export {TilesContext, TilesContextProvider};