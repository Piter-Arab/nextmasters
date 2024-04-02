import Image from "next/image";

type ProductCoverImageProps = {
  src: string;
  alt: string;
};

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
  return (
    <div className="h-56 w-full transition-all overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};
