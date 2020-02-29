import React, { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../../shared/Utilites/Validators";

function inputReducer(state, action) {
  if (action.type === "CHANGE") {
    return {
      ...state,
      value: action.val,
      isValid: validate(action.val, action.validators)
    }
}
    else if (action.type === "TOUCH") {
        return {
            ...state,
            isTouched: true
        }
    }
  
  return state;
}

function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false
  });
  // Called on every keystroke
  const chnageHandler = function(event) {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
        type: "TOUCH"
      });
  }


  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={chnageHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={chnageHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );

  return (
    <div
      className={`wrapper searchDiv ${!inputState.isValid && inputState.isTouched &&
        "from-control--invalid"}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
