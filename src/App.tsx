import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import SettingCounter from './Components/SettingCounter/SettingCounter';
import Counter from './Components/Counter/Counter';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {resetButtonAC, setButtonAC} from './bll/counter-reducer';

function App() {

    const [count, setCount] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [display, setDisplay] = useState<boolean>(true)

    const value = useSelector<AppStateType,number>( state => state.counter.count)
    const dispatch = useDispatch()


    //
    // useEffect(() => {
    //     let valueAssMax = localStorage.getItem('counterMax')
    //     if (valueAssMax) {
    //         let newValue = JSON.parse(valueAssMax)
    //         setMax(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAssStart = localStorage.getItem('counterStart')
    //     if (valueAssStart) {
    //         let newValue = JSON.parse(valueAssStart)
    //         setStart(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterMax', JSON.stringify(max))
    // }, [max])
    // useEffect(() => {
    //     localStorage.setItem('counterStart', JSON.stringify(start))
    // }, [start])

    const isError = max < 0 || start >= max || start < 0

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
        setDisplay(true)
        setDisabled(false)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
        setDisplay(true)
        setDisabled(false)
    }
    const incButton = () => count <= max ? setCount(count + 1) : ''
    const setButton = () => {
        dispatch(setButtonAC())
        // setCount(start)
        // setDisabled(true)
        // setDisplay(false)
    }

    const resetButton = () =>{ dispatch(resetButtonAC())} /*setCount(start)*/

    return (
        <div className="App">
            <SettingCounter
                setButton={setButton}
                onChangeStartValue={onChangeStartValue}
                onChangeMaxValue={onChangeMaxValue}
                start={start}
                max={max}
                disabled={disabled}
                isError={isError}/>
            <Counter
                count={count}
                start={start}
                max={max}
                disabled={disabled}
                isError={isError}
                incButton={incButton}
                resetButton={resetButton}
                setButton={setButton}
                display={display}/>
        </div>
    );
}

export default App;
