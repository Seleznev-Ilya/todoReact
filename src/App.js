import React, {useState} from 'react';
import Task from "./Components/Task/index";
/* import ContextArr from "./Components/ContextArr/index"; */

function App() {
  const [arr, setArr] = useState('');
  const [arrTest, setArrTest] = useState([]);

  function onSubmitInput(event){
    if(arr.trim() !== ''){
      setArrTest(arrTest.concat(arr));
      setArr('');
    }
    event.preventDefault();
  }

  function handleSubmit(event) {
    let newValue = event.target.value;
    if(newValue.trim() !== ''){
      console.log(newValue);
        setArr(newValue);
    }
    event.preventDefault();
  }
  console.log(arrTest);

  return (
  /*  <ContextArr.Provider value={arr}>  */
       <React.Fragment>
          < Task  
              onSubmitInput={onSubmitInput}
              handleSubmit={handleSubmit}
              value={arr}
            />
          {/* <TaskItem /> */}
        </React.Fragment>
   /* </ContextArr.Provider> */
  );
}

export default App;
