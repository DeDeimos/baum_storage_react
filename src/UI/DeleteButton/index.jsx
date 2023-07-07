import React from 'react';
import classes from './DeleteButton.module.css'

const DeleteButton = (props) =>{
    return(
        <button {...props} className={classes.delBtn}>
            Удалить
        </button>
    );
}

export {DeleteButton};