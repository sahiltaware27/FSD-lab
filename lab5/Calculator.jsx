import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [display, setDisplay] = useState('0'); 
    const handleSetDisplay = (value)=>{
        if(display === '0'){
            setDisplay(value)
        }
        else setDisplay((prev) => prev + value)
    } 

    const handleClearValues = () =>{
        setDisplay((prev) => '')
    }

    const handleEval = () => {
        try {
            const result = eval(display)
            setDisplay((String(result)))
        } catch (error) {
            setDisplay("error")
        }
    }

    const deleteValue = () => {
        if(display !== 0) setDisplay(display.slice(0, -1))
    }

 
  return (
    <>
        <div className="calculator">
            <div className="display">{display || 0}</div>
            <div className="buttons">
                <button onClick={() => handleClearValues()}>AC</button>
                <button onClick={() => deleteValue('DEL')}>DEL</button>
                <button onClick={() => handleSetDisplay('%')}>MOD</button>
                <button onClick={() => handleSetDisplay('/')}>÷</button>
                <button onClick={() => handleSetDisplay('1')}>1</button>
                <button onClick={() => handleSetDisplay('2')}>2</button>
                <button onClick={() => handleSetDisplay('3')}>3</button>
                <button onClick={() => handleSetDisplay('+')}>+</button>
                <button onClick={() => handleSetDisplay('4')}>4</button>
                <button onClick={() => handleSetDisplay('5')}>5</button>
                <button onClick={() => handleSetDisplay('6')}>6</button>
                <button onClick={() => handleSetDisplay('-')}>-</button>
                <button onClick={() => handleSetDisplay('7')}>7</button>
                <button onClick={() => handleSetDisplay('8')}>8</button>
                <button onClick={() => handleSetDisplay('9')}>9</button>
                <button onClick={() => handleSetDisplay('*')}>X</button>
                <button onClick={() => handleSetDisplay('0')}>0</button>
                <button onClick={() => handleSetDisplay('.')}>.</button>
                <button onClick={() => handleClearValues()}></button>
                <button onClick={() => handleEval()}>=</button>
            </div>
        </div>
    </>
  )
}

export default Calculator