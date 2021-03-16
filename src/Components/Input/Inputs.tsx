import React, {ChangeEvent} from 'react';
import s from './Input.module.css'


type InputPropsType = {
    start: number
    max: number
    onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
}


export function Inputs(props: InputPropsType) {

    return (
        <>
            <input type='number' className={props.max > -1 || props.start === props.max ? s.input : s.error} value={props.max}
                   onChange={props.onChangeMax} style={{width: 90}}/>
            <input type='number' className={props.start > -1 ? s.input : s.error} value={props.start} onChange={props.onChangeStart}
                   style={{width: 90}}/>

        </>

    )
}