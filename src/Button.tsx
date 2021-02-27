import React from 'react';
import s from './Button.module.css'

type ValueType = {
    addNumber: () => void
    reset: () => void
    count: number
}

export function Button(props: ValueType) {

    const addNumber = () => props.addNumber()
    const reset = () => props.reset()

    return (
        <span className='button'>
                        <button className={s.buttonOne}
                                disabled={props.count === 5}
                                onClick={addNumber}> inc
                        </button>
                        <button className={s.buttonOne}
                                disabled={props.count === 0}
                                onClick={reset}> reset
                        </button>
                    </span>
    )

}