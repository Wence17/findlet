"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/images/logo.jpg";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {Menu, ShoppingCart } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import GoogleTranslate from "./GoogleTranslate";
import MenuItems from "./MenuItems";
// import FacebookPixel from 'react-facebook-pixel';

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const pathname = usePathname();
    
    const {cartCount, handleCartClick } = useShoppingCart();

    // useEffect(() => {
    //   // Check if we're in the browser before initializing the Facebook Pixel
    //   if (typeof window !== 'undefined') {
    //     FacebookPixel.init('YOUR_PIXEL_ID');
    //     FacebookPixel.pageView();
    //   }
    // }, []);
  
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Your gateway to great finds"
            className="w-24 md:w-40 cursor-pointer"
          />
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, i) => (
            <div key={i}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
            <GoogleTranslate />
        <nav className="lg:hidden relative" onClick={()=>setClicked(!clicked)}>
          <Menu />
      {clicked && <MenuItems />}
        </nav>


        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="relative flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <div className="absolute right-50 top-0 text-primary font-semibold text-sm md:text-lg">{cartCount}</div>
            <ShoppingCart />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
    
              
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
