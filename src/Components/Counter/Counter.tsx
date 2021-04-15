import React from 'react';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import {ButtonCounter} from '../Button/ButtonCounter';
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
    start: number
    max: number
    display: boolean
    isError:boolean
    incButton: () => void
    resetButton: () => void
}

const Counter = (props:CounterPropsType) => {

    return (
        <div className={s.containerCounter}>
            <div className={s.scoreboard}>

                <Scoreboard
                    count={props.count}
                    maxValue={props.max}
                    isError={props.isError}
                    display={props.display}
                />
            </div>
            <div className={s.containerButton}>
                     <span className={s.button}>

            <ButtonCounter onClick={props.incButton} title='inc' disabled={props.count === props.max || props.isError}/>
            <ButtonCounter onClick={props.resetButton} title='reset'/>

                    </span>
            </div>
        </div>
    );
};

export default Counter;