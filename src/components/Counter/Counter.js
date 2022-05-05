import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0); //sets counter value
  const [click, setClick] = useState(0); //gets the number of clicks
  const [showCheckbox, setshowCheckbox] = useState(false); //to show or hide checkbox
  const [isChecked, setisChecked] = useState(false); //checkbox checked or not
  const [loading, setLoading] = useState(false); //sets the loader while async call

  const maxLimit = 20;
  const minLimit = 0;

  // Counter Increment function
  const increment = () => {
    setClick(click + 1);
    if (count < maxLimit) {
      if (isChecked) {
        const newCount = Math.round(count + count / 2);
        if (newCount <= maxLimit) {
          setCount(newCount);
        } else {
          alert("Counter reached the maximum limit of 20");
        }
      } else {
        setCount(count + 1);
      }
    } else {
      alert("Counter reached the maximum limit of 20");
    }
  };

  // Counter decrement function
  const decrement = () => {
    setClick(click + 1);
    if (count > minLimit && count <= 6) {
      setisChecked(false);
      setshowCheckbox(false);
      setCount(count - 1);
    } else if (count > 6) {
      if (isChecked) {
        const newCount = Math.round(count - count / 2);
        if (newCount >= minLimit) {
          setCount(newCount);
          if (newCount < 6) setisChecked(false);
        } else {
          alert("Counter reached the minimum limit of 0");
        }
      } else {
        setCount(count - 1);
      }
    } else {
      alert("Counter reached the minimum limit of 0");
    }
  };

  //Counter reset function
  const resetCounter = () => {
    alert(`You have clicked ${click} times`);
    setClick(0);
    setCount(0);
  };

  //Async function while incrementing the counter from 8 to 9
  const asyncIncrease = () => {
    setClick(click + 1);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (isChecked) {
        setCount(Math.round(count + count / 2));
      } else {
        setCount(count + 1);
      }
    }, 2000);
  };

  return (
    <div className="main-container">
      {loading ? (
        <div className="page-loader">
          <div className="loader"></div>
        </div>
      ) : (
        ""
      )}
      <div className="counter">Counter : {count}</div>
      <div
        className={`${
          count === 3 ? "btn-container btn-container-3" : "btn-container"
        }`}
      >
        <button
          className="button-inc"
          onClick={count === 8 ? asyncIncrease : increment}
        >
          Increment
        </button>
        <button className="button-dec" onClick={decrement}>
          Decrement
        </button>
        {count === 6 ? (
          <button className="button-half" onClick={() => setshowCheckbox(true)}>
            Half Counter
          </button>
        ) : (
          ""
        )}
        {count === maxLimit ? (
          <button className="button-reset" onClick={resetCounter}>
            Reset Counter
          </button>
        ) : (
          ""
        )}
      </div>
      {showCheckbox && count >= 6 ? (
        <div className="checkbox-container">
          <label className="check-container">
            Enable half counter
            <input
              type="checkbox"
              onClick={() => setisChecked(!isChecked)}
              disabled={count === 12}
            />{" "}
            <span className="checkmark"></span>
          </label>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Counter;
