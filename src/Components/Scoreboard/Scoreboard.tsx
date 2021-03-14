import React from 'react';
import s from './Scoreboard.module.css'


type ScoreboardType = {
    count: number
    start:number

}

function Scoreboard(props: ScoreboardType) {
    return (
        <div className={props.count === props.start ? s.error : ''}>
            {props.count}
        </div>)

}
export default Scoreboard