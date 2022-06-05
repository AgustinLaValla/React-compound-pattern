import { useProduct } from "../../hooks/useProduct";

export const ProductCounter = () => {
  const { counter, increseBy } = useProduct();
  return (
    <div>
      <button onClick={() => increseBy(-1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => increseBy(1)}>+</button>
    </div>
  );
};
