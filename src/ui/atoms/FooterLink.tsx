import Link from "next/link";
import { type NavLinkProps } from "../types";

export const FooterLink = ({ name, href }: NavLinkProps) => {
  return (
    <div key={name} className="pb-6">
      <Link
        href={href}
        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
      >
        {name}
      </Link>
    </div>
  );
};
