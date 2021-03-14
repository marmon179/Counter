import React, {useState} from 'react';
import './App.css';
import Scoreboard from './Scoreboard';
import {Button} from './Button';

function App() {
    const [count, setCount] = useState(0)

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
                <div className='containerLeftCounter'>

                    <div className='scoreboardLeft'>
                    </div>

                    <div className='containerButtonLeft'>

                    </div>

                </div>
            </div>


            <div className='containerRightCounter'>

                <div className='scoreboardRight'>
                    <Scoreboard count={count}/>
                </div>

                <div className='containerButtonRight'>

                    <Button addNumber={addNumber}
                            reset={reset}
                            count={count}/>
                </div>

            </div>

        </div>
    );
}

export default App;
