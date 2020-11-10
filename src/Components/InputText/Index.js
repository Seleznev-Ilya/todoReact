import React from 'react';

const InputText = ({value, handleSubmit}) => {
    return (
         <input type="text" value={value} onChange={handleSubmit} />   
    )
}

export default InputText