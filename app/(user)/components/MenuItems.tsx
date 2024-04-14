import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Automotive", href: "/Automotive" },
  { name: "Health & Wellness", href: "/Health & Wellness" },
  { name: "Security & Spy Gadgets", href: "/Security & Spy Gadgets" },
  { name: "Become a Distributor", href: "/Distributor" },
  { name: "About Us", href: "/aboutUs" },
  { name: "Contact Us", href: "/contactUs" },
];

const MenuItems = () => {
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
    </div>
  );
};

export default MenuItems;
