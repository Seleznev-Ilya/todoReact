import React from 'react';

const InputText = ({value, handleSubmit}) => {
    return (
         <input type="text" value={value} onChange={(e) => handleSubmit(e)} />   
    )
}

export default InputText