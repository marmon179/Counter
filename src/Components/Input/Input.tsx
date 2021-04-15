import React, {ChangeEvent} from 'react';


type InputsPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error:string
}

export function Input(props: InputsPropsType) {
    return (
        <>
            <input type='number'
                   className={props.error}
                   value={props.value}
                   onChange={props.onChange}
                   style={{width: 90}}/>
        </>
    )
}
