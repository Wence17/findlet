import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowBigRight, ArrowDown } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Become a Distributor", href: "/Distributor" },
  { name: "About Us", href: "/aboutUs" },
  { name: "Contact Us", href: "/contactUs" },
];
const categories = [
  { name: "Automotive", href: "/Automotive" },
  { name: "Health & Beauty", href: "/Health & Beauty" },
  { name: "Baby & Kids", href: "/Baby & Kids" },
  { name: "Clothing and Fashion", href: "/Clothing and Fashion" },
  { name: "Electronics", href: "/Electronics" },
  { name: "Home & Kitchen", href: "/Home & Kitchen" },
  { name: "Pet Supplies", href: "/Pet Supplies" },
  { name: "Security and Safety", href: "/Security and Safety" },
  { name: "Sports and Outdoors", href: "/Sports and Outdoors" },
  { name: "Toys & Games", href: "/Toys & Games" },
];

const MenuItems = () => {
  const [clicked, setClicked]=useState(false)
  const pathname = usePathname();
  return (
    <div
      className={` min-h-fit flex flex-col bg-zinc-200 rounded-md py-1`}
    >
      {links.map((link, i) => (
        <div key={i} className="py-1 hover:bg-zinc-300 ">
          {pathname === link.href ? (
            <Link
              href={link.href}
              className="text-lg font-semibold text-primary px-4 py-2 hover:bg-zinc-300"
            >
              {link.name}
            </Link>
          ) : (
            <Link
              href={link.href}
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary px-4 py-2"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
      <div
        className="flex items-center text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary px-4 py-2 relative"
        onClick={() => setClicked(!clicked)}
      >
        Categories <ArrowBigRight />
        {clicked && (
            <div className="bg-gray-200 absolute right-9 z-30 shadow-lg p-2 w-[220px] top-0">
              {categories.map((category, i) => (
                <div key={i} className="py-1">
                  {pathname === category.href ? (
                <Link
                  href={category.href}
                  className="text-md font-semibold text-primary"
                >
                  {category.name}
                </Link>
              ) : (
                <Link
                  href={category.href}
                  className="text-md font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {category.name}
                </Link>
              )}
                </div>
              ))}
              
            </div>
              )}
      </div>
    </div>
  );
};

export default MenuItems;
