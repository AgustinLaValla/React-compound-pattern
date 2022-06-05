import "./styles.css";
import { Product } from "./interfaces/Product.interface";
import { ProductCard } from "./components/ProductCard";

const product: Product = {
  img:
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/76B0/production/_105848303_gettyimages-996540050.jpg",
  title: "my coffe"
};

export default function App() {
  return (
    <ProductCard product={product}>
      <ProductCard.Title />
      <ProductCard.Img />
      <ProductCard.Counter />
    </ProductCard>
  );
}
