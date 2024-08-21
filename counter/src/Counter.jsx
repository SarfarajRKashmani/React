
import React, { useState } from 'react';
import './Counter.css';

function Counter({Value,No}) {
  const [count, setCount,] = useState(Number(Value));

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset =()=>{
    setCount(Number(Value))
  }

  return (
    <div className="App">
      <h1>Counter : {No}</h1>
      <div className="counter">
        {count==0
        ?<button disabled style={{backgroundColor:"Red"}} onClick={decrement}>-</button>
        :<button style={{backgroundColor:"Red"}} onClick={decrement}>-</button>}
        <span>{count}</span>
        <button style={{backgroundColor:"green"}} onClick={increment}>+</button>
        {count>=50 ?<button onClick={reset} style={{backgroundColor:"white",color:"black"}}>Reset</button>:null}
      </div>
    </div>
  );
}

export default Counter;
