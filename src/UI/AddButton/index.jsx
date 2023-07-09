import React from 'react';
import classes from "./AddButton.module.css"

const AddButton = (props) =>{
    return(
        <button {...props} className={classes.addBtn}>
            Создать пост
        </button>
    );
}

export {AddButton};