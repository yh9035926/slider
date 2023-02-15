import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../module/counter";

const CounterContainers = () => {
  const number = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default CounterContainers;
