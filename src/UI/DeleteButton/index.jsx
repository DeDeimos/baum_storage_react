import React from 'react';
import classes from './DeleteButton.module.css'

const DeleteButton = (props) =>{
    return(
        <button {...props} classname={classes.delBtn}>
            Удалить
        </button>
    );
}

export {DeleteButton};