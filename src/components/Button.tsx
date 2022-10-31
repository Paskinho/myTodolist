import React from 'react';
import {FilterValuesType} from "../App";

type ButtonType = {
    name:string
    callBack: () => void
}

export const Button = (props:ButtonType) => {
    const{name, callBack} = props
    const  onClickHandler = () => {
        callBack()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}