import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import {Button} from './Components/Button/Button';
import {Input} from './Components/Input/Input';
import s from './Components/Input/Input.module.css';

function App() {

    const [count, setCount] = useState(0)
    const [start, setStart] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>setStart(e.currentTarget.value)


    function addStart() {

    }

    function addNumber() {
        if (count < 5) {
            return setCount(count + 1)
        }
    }

    function reset() {
        setCount(0)
    }

    return (
        <div className="App">

            <div className='containerFullLeftCounter'>
                <div className='containerCounter'>

                    <div className='scoreboardLeft'>

                        <input type='number' className={s.input} value={start} onChange={onChange}/>
                        {/*<Input />*/}
                        {/*<Input />*/}
                    </div>

                    <div className='containerButton'>
                        <Button onClick={addNumber} title='set' disabled={count === 5}/>
                    </div>

                </div>
            </div>


            <div className='containerCounter'>

                <div className='scoreboard'>
                    <Scoreboard count={count}/>
                </div>

                <div className='containerButton'>

                     <span className='button'>
            <Button onClick={addNumber} title='inc' disabled={count === 5}/>
            <Button onClick={reset} title='reset'/>
                    </span>

                </div>

            </div>

        </div>
    );
}

export default App;
