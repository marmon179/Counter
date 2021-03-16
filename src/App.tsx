import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from './Components/Button/Button';
import {Inputs} from './Components/Input/Inputs';
import {Scoreboard} from './Components/Scoreboard/Scoreboard';

function App() {

    const [count, setCount] = useState(0)
    const [start, setStart] = useState(0)
    const [max, setMax] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        let valueAssMax = localStorage.getItem('counterMax')
        if (valueAssMax) {
            let newValue = JSON.parse(valueAssMax)
            setMax(newValue)
        }
    }, [])
    useEffect(() => {
        let valueAssStart = localStorage.getItem('counterStart')
        if (valueAssStart) {
            let newValue = JSON.parse(valueAssStart)
            setStart(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMax', JSON.stringify(max))
    }, [max])
    useEffect(() => {
        localStorage.setItem('counterStart', JSON.stringify(start))
    }, [start])

    let isError = max < 0 || start >= max || start < 0

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
        setCount(start)
        setDisabled(true)
        setDisplay(false)
    }

    const resetButton = () => setCount(start)

    return (
        <div className="App">

            <div className='containerFullLeftCounter'>
                <div className='containerCounter'>

                    <div className='scoreboardSettings'>
                        <div className='textScoreboardSettings'>
                            <div className='textMax'>Max.value:</div>
                            <div className='textStart'>Start value:</div>
                        </div>
                        <div className='inputContainer'>

                            <Inputs
                                start={start}
                                max={max}
                                onChangeStart={onChangeStartValue}
                                onChangeMax={onChangeMaxValue}/>

                        </div>

                    </div>

                    <div className='containerButton'>

                        <Button onClick={setButton} title='set' disabled={disabled || isError}/>

                    </div>
                </div>
            </div>


            <div className='containerCounter'>

                <div className='scoreboard'>

                    <Scoreboard
                        count={count}
                        start={start}
                        max={max}
                        isError={isError}
                        display={display}

                    />
                </div>

                <div className='containerButton'>

                     <span className='button'>

            <Button onClick={incButton} title='inc' disabled={count === max}/>
            <Button onClick={resetButton} title='reset'/>

                    </span>

                </div>

            </div>

        </div>
    );
}

export default App;
