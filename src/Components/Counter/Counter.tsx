import React from 'react';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import {Button} from '../Button/Button';
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
    start: number
    max: number
    disabled: boolean
    isError: boolean
    incButton: () => void
    resetButton: () => void
    setButton: () => void
    display: boolean

}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.containerCounter}>
            <div className={s.scoreboard}>

                <Scoreboard
                    count={props.count}
                    startValue={props.start}
                    maxValue={props.max}
                    isError={props.isError}
                    display={props.display}
                />
            </div>
            <div className={s.containerButton}>
                     <span className={s.button}>

            <Button onClick={props.incButton} title='inc' disabled={props.count === props.max || props.isError}/>
            <Button onClick={props.resetButton} title='reset'/>

                    </span>
            </div>
        </div>
    );
};

export default Counter;