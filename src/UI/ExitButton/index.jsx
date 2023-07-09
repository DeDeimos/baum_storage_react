import React from 'react';
import classes from "./ExitButton.module.css"

const ExitButton = (props) =>{
    return(
        <button {...props} className={classes.extBtn}>
            Выйти
        </button>
    );
}

export {ExitButton};