import React, {ChangeEvent, useState} from 'react';
import s from './Input.module.css'


type InputPropsType = {

}



export function Input(props: InputPropsType) {
    const [start, setStart] = useState('')
    // const [max, setMax] = useState(0)
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>setStart(e.currentTarget.value)
    return (
        <input type='number' className={s.input} value={start} onChange={onChange}/>
    )
}