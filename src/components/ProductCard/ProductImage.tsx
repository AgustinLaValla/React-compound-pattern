import { useProductCardContext } from "../../providers/ProductCardProvider";

const noImage =
  "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";

export const ProductImage = ({ img = "" }) => {
  const { product } = useProductCardContext();
  const { img: productImg } = product;

  const getImageUrl = () => {
    if (img) return img;
    if (productImg) return productImg;
    return noImage;
  };

  return <img src={getImageUrl()} alt="Product" />;
};
