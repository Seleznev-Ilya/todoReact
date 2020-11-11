import React, { useState } from 'react'
import Task from './Components/Task/index'
import TaskItems from './Components/TaskItems/index'
import Store from './Components/Store/index'
import './style/App.scss'
/* import ContextArr from "./Components/ContextArr/index"; */

function App() {
    const [arr, setArr] = useState('')
    const store = new Store('test')

    const newItem = {
        id: new Date().getTime(),
        value: arr,
        checkbox: false,
    }

    function onSubmitInput(event) {
        event.preventDefault()
        if (arr.trim() !== '') {
            store.sync([newItem])
            setArr('')
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        let newValue = event.target.value
        setArr(newValue)
    }

    return (
        /*  <ContextArr.Provider value={arr}>  */
        <div className={'App'}>
            <Task
                className={'Task'}
                onSubmitInput={onSubmitInput}
                handleSubmit={handleSubmit}
                value={arr}
            />
            <TaskItems className={'TaskItems'} items={store.getStore()} />
        </div>
        /* </ContextArr.Provider> */
    )
}

export default App
