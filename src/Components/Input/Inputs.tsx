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
            <input type='number' className={s.input} value={props.max} onChange={props.onChangeMax} style={{width:90}}/>
            <input type='number' className={s.input} value={props.start} onChange={props.onChangeStart} style={{width:90}}/>

        </>

    )
}