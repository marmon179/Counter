import React from 'react';
import s from './Scoreboard.module.css'


type ScoreboardType = {
    count: number
    start: number
    max: number
    display: boolean
    isError: boolean
}

export const Scoreboard = (props: ScoreboardType) => {
    const textError = <span className={s.textError}>Incorrect value!</span>
    const textSet = <span className={s.textSet}>enter values and press "set"</span>

    let Error2 = (props.isError ? textError : textSet)

    return (
        <div className={props.count === props.max ? s.error : ''}>
            {
                props.display ? Error2 : props.count

            }
        </div>)

}

