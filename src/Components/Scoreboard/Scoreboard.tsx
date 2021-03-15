import React from 'react';
import s from './Scoreboard.module.css'


type ScoreboardType = {
    count: number
    start: number
    max: number
}

function Scoreboard(props: ScoreboardType) {
    const textError = <span className={s.textError}>Incorrect value!</span>
    const textSet = <span className={s.textSet}>enter values and press "set"</span>

    function setScoreboard() {
        if (props.max < 0 || props.start === props.max) {
            return textError
        } else if (props.start < 0) {
            return textError
        }
         else {
            return props.count
        }
    }

    return (
        <div className={props.count === props.max ? s.error : ''}>
            {setScoreboard()}
        </div>)

}

export default Scoreboard