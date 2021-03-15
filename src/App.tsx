import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import {Button} from './Components/Button/Button';
import {Inputs} from './Components/Input/Inputs';

function App() {

    const [count, setCount] = useState(0)
    const [start, setStart] = useState(0)
    const [max, setMax] = useState(0)
    const [disabled,setDisabled] = useState(false)

    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) =>{
        setStart(+(e.currentTarget.value))
        setDisabled(false)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) =>{
        setMax(+(e.currentTarget.value))
        setDisabled(false)
    }

    function addNumber() {
        if (count <= max) {
            return setCount(count + 1)
        }
    }

    function set() {
        setCount(start)
        setDisabled(true)
    }

    function reset() {
        setCount(start)
    }

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
                            onChangeStart={onChangeStart}
                            onChangeMax={onChangeMax}/>
                        </div>

                    </div>

                    <div className='containerButton'>
                        <Button onClick={set} title='set' disabled={disabled} />
                    </div>

                </div>
            </div>


            <div className='containerCounter'>

                <div className='scoreboard'>
                    <Scoreboard
                        count={count}
                        start={max}
                    />
                </div>

                <div className='containerButton'>

                     <span className='button'>
            <Button onClick={addNumber} title='inc' disabled={count === max}/>
            <Button onClick={reset} title='reset'/>
                    </span>

                </div>

            </div>

        </div>
    );
}

export default App;
