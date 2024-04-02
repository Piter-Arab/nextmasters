import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
  {
    id: "1",
    category: "Kubki",
    name: "kubek 911",
    price: 4200,
    coverImage: {
      alt: "911",
      src: "/911cup.jpg",
    },
  },
  {
    id: "1",
    category: "Kubki",
    name: "kubek 911",
    price: 4200,
    coverImage: {
      alt: "911",
      src: "/911cup.jpg",
    },
  },
  {
    id: "1",
    category: "Kubki",
    name: "kubek 911",
    price: 4200,
    coverImage: {
      alt: "911",
      src: "/911cup.jpg",
    },
  },
  {
    id: "1",
    category: "Kubki",
    name: "kubek 911",
    price: 4200,
    coverImage: {
      alt: "911",
      src: "/911cup.jpg",
    },
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <section>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
}
