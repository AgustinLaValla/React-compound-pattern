import React from "react";
import { useProduct } from "../../hooks/useProduct";
import { Product } from "../../interfaces/Product.interface";
import { ProductCardProvider } from "../../providers/ProductCardProvider";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCounter } from "./ProductCounter";

interface ProductCardProps {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
}

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increseBy } = useProduct();

  return (
    <ProductCardProvider
      product={product}
      counter={counter}
      increseBy={increseBy}
    >
      <div>{children}</div>
    </ProductCardProvider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Img = ProductImage;
ProductCard.Counter = ProductCounter;
