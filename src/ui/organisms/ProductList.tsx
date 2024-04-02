import { type ProductItemType } from "../types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
  return (
    <>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </>
  );
};
