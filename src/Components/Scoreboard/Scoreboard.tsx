import React from 'react';
import s from './Scoreboard.module.css'


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