import React from 'react';

const Counter = (props) => {
  return (
    <>
      <div className="input-div">
        <input type="text" className="input" onChange={props.inp}></input>
      </div>
      <div className="btn-div">
        <button onClick={props.clr}>AC</button>
        <button onClick={props.dec}>x</button>
        <button onClick={props.dec}>%</button>
        <button onClick={props.dec}>/</button>
      </div>
      <div className="btn-div">
        <button onClick={props.inc}>7</button>
        <button onClick={props.dec}>8</button>
        <button onClick={props.dec}>9</button>
        <button onClick={props.dec}>x</button>
      </div>
      <div className="btn-div">
        <button onClick={props.inc}>4</button>
        <button onClick={props.dec}>5</button>
        <button onClick={props.dec}>6</button>
        <button onClick={props.dec}>-</button>
      </div>
      <div className="btn-div">
        <button onClick={props.inc}>1</button>
        <button onClick={props.dec}>2</button>
        <button onClick={props.dec}>3</button>
        <button onClick={props.dec}>+</button>
      </div>
      <div className="btn-div" style={{ borderRadius: '0 0 10px 10px' }}>
        <button onClick={props.inc}>Sqrt</button>
        <button onClick={props.dec}>0</button>
        <button onClick={props.dec}>.</button>
        <button onClick={props.dec}>=</button>
      </div>
      <div className="disp-div">
        <p>{props.count}</p>
      </div>
    </>
  );
};

export default Counter;
