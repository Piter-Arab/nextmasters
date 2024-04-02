import { ProductList } from "@/ui/organisms/ProductList";
import { products } from "@/constants/Products";

export default function Home() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
      <ProductList products={products} />
    </div>
  );
}
