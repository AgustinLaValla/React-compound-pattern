import React from "react";
import { Product } from "../interfaces/Product.interface";

interface ProductCardProviderProps {
  product: Product;
  increseBy: (value: number) => void;
  counter: number;
}

const ProductCardContext = React.createContext<ProductCardProviderProps>({
  counter: 0,
  increseBy: (value) => {},
  product: { title: "", img: "" }
});

const { Provider } = ProductCardContext;

export const ProductCardProvider: React.FC<ProductCardProviderProps> = ({
  product,
  increseBy,
  counter,
  children
}) => {
  return (
    <Provider
      value={{
        product,
        increseBy,
        counter
      }}
    >
      {children}
    </Provider>
  );
};

export const useProductCardContext = () => React.useContext(ProductCardContext);
