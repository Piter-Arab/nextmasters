import Link from "next/link";

type NavbarLinkProps = {
  name: string;
  href: string;
};

export const NavbarLink = ({ name, href }: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
    >
      {name}
    </Link>
  );
};

// X6QepcNmSNLxB2