import React, { useState } from "react";

export default function useFormIsValid(isValid) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);
  let enteredValueIsValid = isValid(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;
  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredValueTouched(true);
    if (valueInputIsInvalid) {
      return;
    }
    setEnteredValue("");
    setEnteredValueTouched(false);
  };
  const valueInputClasses = valueInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return {
    enteredValue,
    valueInputChangeHandler,
    valueInputBlurHandler,
    valueInputIsInvalid,
    valueInputClasses,
    formSubmissionHandler,
  };
}
