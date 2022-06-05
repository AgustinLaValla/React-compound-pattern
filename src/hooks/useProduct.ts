import React from "react";

export const useProduct = () => {
  const [counter, setCounter] = React.useState(1);

  const increseBy = (value: number) => setCounter(Math.max(counter + value, 1));

  return { counter, increseBy };
};
