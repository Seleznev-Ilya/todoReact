import React, {useState} from 'react';
import Task from "./Components/Task/index";
import Store from "./Components/Store/index";
/* import ContextArr from "./Components/ContextArr/index"; */

function App() {
  const [arr, setArr] = useState('');
  const store = new Store('test');

  function onSubmitInput(event){
    event.preventDefault();
    if(arr.trim() !== ''){
      store.sync([arr]);
      setArr('');
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let newValue = event.target.value;
        setArr(newValue); 
  }

  return (
  /*  <ContextArr.Provider value={arr}>  */
       <React.Fragment>
          < Task  
              className={'InputMain'} 
              onSubmitInput={onSubmitInput}
              handleSubmit={handleSubmit}
              value={arr}
            />

        </React.Fragment>
   /* </ContextArr.Provider> */
  );
}

export default App;
