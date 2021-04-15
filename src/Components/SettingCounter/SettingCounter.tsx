import React, {ChangeEvent} from 'react';
import {Input} from '../Input/Input';
import {ButtonCounter} from '../Button/ButtonCounter';
import s from './SettingCounter.module.css'

type SettingCounterPropsType = {
    isError:boolean
    start: number
    max: number
    disabled: boolean
    setButton:() =>void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>)=> void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>)=> void
}



const SettingCounter = (props:SettingCounterPropsType) => {
    const errorStart = ( props.max < 0) || (props.start === props.max) ? s.error : s.input
    const errorMax = (props.start < 0) || (props.start >= props.max) ? s.error : s.input

    return (
        <div className={s.containerCounter}>
            <div className={s.scoreboard}>
                <div className={s.textScoreboardSettings}>
                    <div className={s.textMax}>Max.value:</div>
                    <div className={s.textStart}>Start value:</div>
                </div>
                <div className={s.inputContainer}>
                    <Input
                        value={props.max}
                        onChange={props.onChangeMaxValue}
                        error={errorMax}
                    />
                    <Input
                        value={props.start}
                        onChange={props.onChangeStartValue}
                        error={errorStart}
                    />
                </div>
            </div>
            <div className={s.containerButton}>

                <ButtonCounter onClick={props.setButton} title="set" disabled={props.disabled || props.isError}/>

            </div>
        </div>
    );
};

export default SettingCounter;