import { useProductCardContext } from "../../providers/ProductCardProvider";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useProductCardContext();
  const { title: productTitle } = product;
  const getTitle = () => {
    if (!title && !productTitle) throw new Error("Title is required");
    if (title) return title;
    return productTitle;
  };

  return <span>{getTitle()}</span>;
};
