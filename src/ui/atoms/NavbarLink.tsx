import Link from "next/link";
import { type NavLinkProps } from "../types";

export const NavbarLinkDesktop = ({ name, href }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center border-b-2 border-transparent transition-all text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      {name}
    </Link>
  );
};

export const NavbarLinkMobile = ({ name, href }: NavLinkProps) => {
  return (
    <Link
      className="w-full block text-left border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
      href={href}
    >
      {name}
    </Link>
  );
};

//  DESKTOP
//  Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//  Active: "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"

//  MOBILE
//  Active: className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
//  Current: className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
