import React, {ChangeEvent} from 'react';
import './App.css';
import SettingCounter from './Components/SettingCounter/SettingCounter';
import Counter from './Components/Counter/Counter';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {incButtonAC, onChangeMaxValueAC, onChangeStartValueAC, resetButtonAC, setButtonAC} from './bll/counter-reducer';

function App() {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const start = useSelector<AppStateType, number>(state => state.counter.start)
    const max = useSelector<AppStateType, number>(state => state.counter.max)
    const disabled = useSelector<AppStateType, boolean>(state => state.counter.disabled)
    const display = useSelector<AppStateType, boolean>(state => state.counter.display)
    const dispatch = useDispatch()

    const isError = max < 0 || start >= max || start < 0

    const setButton = () => {dispatch(setButtonAC())}
    const incButton = () => dispatch(incButtonAC())
    const resetButton = () => {dispatch(resetButtonAC())}
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {dispatch(onChangeStartValueAC(e))}
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {dispatch(onChangeMaxValueAC(e))}



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
    return (
        <div className="App">
            <SettingCounter
                max={max} start={start} disabled={disabled}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                setButton={setButton} isError={isError}/>
            <Counter
                count={count} start={start} max={max}
                isError={isError} display={display}
                incButton={incButton} resetButton={resetButton}/>
        </div>
    );
}

export default App;
