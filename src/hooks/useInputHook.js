import { useState } from "react";

export const useInputHook = (initialValue) => {
  const [state, setstate] = useState(initialValue);
  const updateValue = (e) => {
    setstate(e.target.value);
    console.log(state);
  };
  const resetValue = () => setstate("");
  return [state, updateValue, resetValue];
};
