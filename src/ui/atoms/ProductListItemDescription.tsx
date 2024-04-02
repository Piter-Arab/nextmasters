import { type ProductItemType } from "../types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
  product: ProductItemType;
};

export const ProductListItemDescription = ({
  product: { name, category, price },
}: ProductListItemDescriptionProps) => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mt-4 text-sm font-bold text-gray-900 capitalize">
          {name}
        </h3>
      </div>
      <p className="mt-1 text-sm text-gray-500 capitalize">
        <span className="sr-only">Kategoria:</span> {category}
      </p>
      <p className="mt-1 text-sm text-gray-700">
        <span className="sr-only">Cena:</span> {formatMoney(price / 100)}
      </p>
    </>
  );
};
