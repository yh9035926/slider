import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "../module/counter2";

const CounterContainer2 = () => {
  const [num, setNum] = useState(0);
  const onChange = (e) => {
    setNum(e.target.value);
  };

  const number2 = useSelector((state) => state.counter2);

  const dispatch = useDispatch();

  const onIncrease2 = (num) => {
    dispatch(increase(num));
  };
  return (
    <div>
      <hr />
      <h1>CounterContainer2</h1>
      <div>
        <button onClick={() => onIncrease2(num)}>+</button>
        <input type="text" onChange={onChange} value={num}></input>
        <p>DisplayNum</p>
        {number2.value}
      </div>
    </div>
  );
};

export default CounterContainer2;
