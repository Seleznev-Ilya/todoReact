import React from 'react';
import InputMain from '../InputMain/index';


const Task = ({onSubmitInput, handleSubmit, value}) => {
   
    return (
        <div className="Task-wrapper">
            < InputMain 
                className={'InputMain'} 
                onSubmitInput={onSubmitInput} 
                handleSubmit={handleSubmit} 
                value={value}
            />
        </div>
    )
}

export default Task;


  