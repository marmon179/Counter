import React from 'react';
import {Button} from '@material-ui/core';

type ButtonPropsType = {
    title: string
    disabled?: boolean
    onClick: () => void
}


export function ButtonCounter(props: ButtonPropsType) {
    return (
        <Button
            variant='contained'
            color ='primary'
            size='large'
            style={{margin:'10px'}}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.title}</Button>
    )
}