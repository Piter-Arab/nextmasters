export type ProductItemType = {
  id: string;
  category: string;
  name: string;
  price: number;
  coverImage: {
    src: string;
    alt: string;
  };
};

export type NavLinkProps = {
  name: string;
  href: string;
};
