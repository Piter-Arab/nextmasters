import React from "react";
import { FooterLink } from "../atoms/FooterLink";
import { navigation } from "@/constants/Navigation";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/15">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item, index) => (
            <FooterLink href={item.href} key={index} name={item.name} />
          ))}
        </nav>
        <p className="mt-20 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 BuyAPorsche Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
