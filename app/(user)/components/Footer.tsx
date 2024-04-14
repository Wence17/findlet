import Image from "next/image";
import logo from "@/public/assets/images/logo.jpg";
import Link from "next/link";
import { Facebook, Instagram, TicketCheckIcon, Youtube } from "lucide-react";
import { BiLogoTiktok } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 shadow mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="md:flex items-center justify-between space-y-5 md:space-y-0 ml-2 md:ml-0">
          <Link href="/" className="md:mb-4 mb-0 ">
            <Image src={logo} className="w-24 md:w-40" alt="findlet Logo" />
          </Link>
          <div className="md:flex md:flex-col justify-center items-center">
            <h1 className="my-2 font-bold text-lg mt-5 md:mt-0">
              More About Us
            </h1>
            <div className="flex flex-col space-y-2 ">
              <Link href={"/contactUs"} className="text-gray-600 font-bold">
                Contact Us
              </Link>
              <Link href={"/aboutUs"} className="text-gray-600 font-bold">
                About Us
              </Link>
            </div>
          </div>
          <div className="md:flex md:flex-col justify-center items-center">
            <h1 className="my-2 font-bold text-lg mt-5 md:mt-0">Support</h1>
            <div className="flex flex-col space-y-2 ">
              <p className="text-gray-600 font-bold">
                Email: findlet142@gmail.com
              </p>
              <p className="text-gray-600 font-bold">Phone: +2348074902241</p>
              <p className="text-gray-600 font-bold">Phone: +2348131980794</p>
            </div>
          </div>

          <div className="md:flex md:flex-col justify-center items-center">
            <h1 className="my-2 font-bold text-lg">Social Media</h1>
            <div className="md:flex justify-center space-y-2 md:space-y-0">
              <Link
                href="https://www.facebook.com/profile.php?id=61556670767727&mibextid=ZbWKwL"
                className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 md:ms-0 space-x-2"
              >
                <Facebook />
                <span className="md:sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.youtube.com/@official_findlet"
                className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 space-x-2"
              >
                <Youtube />
                <span className="flex md:sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@official_findlet?_t=8lVI1AcK2Le&_r=1"
                className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5  space-x-2"
              >
                <BiLogoTiktok className="text-2xl" />
                <span className="md:sr-only">Tiktok</span>
              </Link>
              <Link
                href="https://www.instagram.com/official_findlet?igsh=MTdib2kzOW80N3F4cQ=="
                className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 space-x-2"
              >
                <Instagram />
                <span className="md:sr-only">Instagram</span>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VaZdYTADeON7CwOTUa2g"
                className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 space-x-2"
              >
                <FaWhatsapp />
                <span className="md:sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-500 mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link
            href={"mailTo:obimkasomto@gmail.com"}
            target="_blank"
            className="hover:underline"
          >
            Wence_Dev™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
