import { useState } from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {


  const [counter, setCounter] = useState(value);

  const handleAdd = (event) => {
    //setCounter(counter + 1);
    //otra manera
    setCounter((c) => c + 1);
  }


  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>
        +1
      </button>

      <button onClick={(event) => handleAddArg(event, 'hola')}>
        print console
      </button>
    </>
  )
}


const handleAddArg = (event, newValue) => {
  console.log(newValue);
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

