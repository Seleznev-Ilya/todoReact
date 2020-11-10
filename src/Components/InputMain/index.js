import React/* , {useState} */ from 'react';
import InputText from '../InputText/Index';

const InputMain = ({ className, onSubmitInput, handleSubmit, value}) => {

    /* const [value, setValue] = useState('');

    function handleSubmit(event) {
        let newValue = event.target.value;
        setValue(newValue);
        event.preventDefault();
    } */
   /*  function handleSubmitClean(event) {
        let newValue = event.target.value;
        setValue('...');
        event.preventDefault();
    } */
    
    
    
    return (
        <div className={className}> 
            <form onSubmit={onSubmitInput} >
                   <InputText value={value} handleSubmit={handleSubmit}/>
            </form>
        </div>
    )
}


export default InputMain;