import Image from "next/image";
import logo from "@/public/assets/images/logo.jpg";
import Link from "next/link";
import { Facebook, Instagram, TicketCheckIcon, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow mt-auto">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 64 64"
                id="tiktok"
              >
                <path d="M33 7a1 1 0 0 0-1 1v34c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1c-8.28 0-15 6.721-15 15 0 8.28 6.72 15 15 15 8.279 0 15-6.72 15-15V25.494A16.927 16.927 0 0 0 49 27h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2c-3.863 0-7-3.137-7-7V8a1 1 0 0 0-1-1zm1 2h6v1c0 4.967 4.033 9 9 9h1v6h-1c-2.731 0-5.292-.73-7.499-2.009a1 1 0 0 0-1.501.866V42c0 7.175-5.825 13-13 13s-13-5.825-13-13c0-6.838 5.292-12.45 12-12.962v6.033c-3.39.486-6 3.405-6 6.93 0 3.862 3.137 7 7 7s7-3.138 7-7z"></path>
              </svg>
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
        <hr className="my-4 border-gray-200 mx-auto dark:border-gray-700" />
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
