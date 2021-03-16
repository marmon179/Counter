import React from 'react';
import s from './Scoreboard.module.css'


type ScoreboardType = {
    count: number
    startValue: number
    maxValue: number
    display: boolean
    isError: boolean
}

export const Scoreboard = (props: ScoreboardType) => {
    const textError = <span className={s.textError}>Incorrect value!</span>
    const textSet = <span className={s.textSet}>enter values and press "set"</span>

    let Error2 = (props.isError ? textError : textSet)

    return (
        <div className={props.count === props.maxValue ? s.error : ''}>
            {
                props.display ? Error2 : props.count

            }
        </div>)

}

