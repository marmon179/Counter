import React from 'react';
import s from './Button.module.css'


type ScoreboardType = {
    count: number
}

function Scoreboard(props: ScoreboardType) {
    return (
        <div className={props.count === 5 ? s.error : ''}>
            {props.count}
        </div>)

}
export default Scoreboard