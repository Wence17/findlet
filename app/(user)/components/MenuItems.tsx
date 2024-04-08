import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";



const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    { name: "Teens", href: "/Teens" },
  ];

  
const MenuItems = () => {
    const pathname = usePathname();
  return (
    <div
      className={`absolute top-8 z-30 w-[100px] min-h-fit flex flex-col bg-zinc-200 rounded-md py-1`}
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
