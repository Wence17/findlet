import Image from "next/image";
import logo from "@/public/assets/images/logo.jpg";
import Link from "next/link";
import { Facebook, Instagram, TicketCheckIcon, Youtube } from "lucide-react";
import { BiLogoTiktok } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-200 shadow mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center md:mb-4 mb-0 ">
            <Image src={logo} className="w-24 md:w-40" alt="findlet Logo" />
          </Link>
          <div className="flex justify-center items">
            <Link
              href="https://www.facebook.com/profile.php?id=61556670767727&mibextid=ZbWKwL
            "
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="https://www.youtube.com/@Find_let"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Youtube />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@find_let?_t=8lMbI0fUytZ&_r=1"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <BiLogoTiktok  className="text-2xl"/>
              <span className="sr-only">Tiktok</span>
            </Link>
            <Link
              href="https://www.instagram.com/findlet142?utm_source=qr&igsh=MTdib2kzOW80N3F4cQ=="
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <hr className="my-4 border-gray-500 mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            FindLet™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
