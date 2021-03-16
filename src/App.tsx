import React, {ChangeEvent, useState} from 'react';
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

    let isStartValue = start <= 0 || start >= max
    let isMaxValue = max <= 0
    let isIncButton = count <= max
    let isError = max < 0 || start >= max || start < 0

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
        setDisplay(true)
        isStartValue ? setDisabled(true) : setDisabled(false)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
        setDisplay(true)
        isMaxValue ? setDisabled(true) : setDisabled(false)
    }
    const incButton = () => isIncButton ? setCount(count + 1) : ''
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

                        <Button onClick={setButton} title='set' disabled={disabled}/>

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
