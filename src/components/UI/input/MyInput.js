import React from 'react';
import cl from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input {...props} className={cl.myInp}/>
    );
};

export default MyInput;