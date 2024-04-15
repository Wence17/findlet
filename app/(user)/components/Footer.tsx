import Image from "next/image";
import logo from "@/public/assets/images/logo.jpg";
import Link from "next/link";
import { Facebook, Instagram, TicketCheckIcon, Youtube } from "lucide-react";
import { BiLogoTiktok } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/*Grid*/}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 max-md:max-w-sm max-md:mx-auto">
      <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
        <Link
          href="/"
          className="cursor-pointer flex justify-center lg:justify-start"
        >
          <Image src={logo} className="w-24 md:w-40" alt="findlet Logo" />
        </Link>
        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
          Trusted in more than 100 countries &amp; 5 million customers. Have any
          query ?
        </p>
        <Link
          href="/contactUs"
          className="py-2.5 cursor-pointer px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
        >
          Contact us
        </Link>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto">
        <h4 className="text-lg text-gray-900 font-medium mb-7 ">FindLet</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <Link
              href="/"
              className="cursor-pointer text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li className="mb-6">
            <Link
              href="/aboutUs"
              className="cursor-pointer  text-gray-600 hover:text-gray-900"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contactUs"
              className="cursor-pointer  text-gray-600 hover:text-gray-900"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <Link
              href={"mailTo:obimkasomto@gmail.com"}
              className="cursor-pointer text-gray-600 hover:text-gray-900"
            >
              Customer Support
            </Link>
          </li>
          <li className="mb-6">
            <Link
              href="#"
              className="cursor-pointer  text-gray-600 hover:text-gray-900"
            >
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="cursor-pointer  text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      {/*End Col*/}
    </div>
    {/*Grid*/}
    <div className="py-7 border-t border-gray-200">
      <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
        <span className="text-sm text-gray-500 ">
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
        <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
          <Link
                href="https://www.tiktok.com/@official_findlet?_t=8lVI1AcK2Le&_r=1"
                className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gray-400  hover:bg-gray-900 "
              >
                <BiLogoTiktok className="w-[1.25rem] h-[0.875rem] text-white" />
                <span className="md:sr-only">Tiktok</span>
              </Link>
          <Link
                href="https://whatsapp.com/channel/0029VaZdYTADeON7CwOTUa2g"
                className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gray-400  hover:bg-gray-900 "
              >
                <FaWhatsapp className="w-[1.25rem] h-[0.875rem] text-white" />
                <span className="md:sr-only">WhatsApp</span>
              </Link>
          <Link
                href="https://www.instagram.com/official_findlet?igsh=MTdib2kzOW80N3F4cQ=="
                className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gray-400  hover:bg-gray-900 "
              >
                <Instagram className="w-[1.25rem] h-[0.875rem] text-white" />
                <span className="md:sr-only">Instagram</span>
              </Link>
          <Link
                href="https://www.facebook.com/profile.php?id=61556670767727&mibextid=ZbWKwL"
                className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gray-400  hover:bg-gray-900 "
              >
                <Facebook className="w-[1.25rem] h-[0.875rem] text-white" />
                <span className="md:sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.youtube.com/@official_findlet"
                className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gray-400  hover:bg-gray-900 "
              >
                <Youtube className="w-[1.25rem] h-[0.875rem] text-white" />
                <span className="flex md:sr-only">YouTube</span>
              </Link>
        </div>
      </div>
    </div>
  </div>
</footer>

    // <footer className="bg-gray-200 shadow mt-auto">
    //   <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    //     <div className="md:flex items-center justify-between space-y-5 md:space-y-0 ml-2 md:ml-0">
    //       <Link href="/" className="md:mb-4 mb-0 ">
    //         <Image src={logo} className="w-24 md:w-40" alt="findlet Logo" />
    //       </Link>
    //       <div className="md:flex md:flex-col justify-center items-center">
    //         <h1 className="my-2 font-bold text-lg mt-5 md:mt-0">
    //           More About Us
    //         </h1>
    //         <div className="flex flex-col space-y-2 ">
    //           <Link href={"/contactUs"} className="text-gray-600 font-bold">
    //             Contact Us
    //           </Link>
    //           <Link href={"/aboutUs"} className="text-gray-600 font-bold">
    //             About Us
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="md:flex md:flex-col justify-center items-center">
    //         <h1 className="my-2 font-bold text-lg mt-5 md:mt-0">Support</h1>
    //         <div className="flex flex-col space-y-2 ">
    //           <p className="text-gray-600 font-bold">
    //             Email: findlet142@gmail.com
    //           </p>
    //           <p className="text-gray-600 font-bold">Phone: +2348074902241</p>
    //           <p className="text-gray-600 font-bold">Phone: +2348131980794</p>
    //         </div>
    //       </div>

    //       <div className="md:flex md:flex-col justify-center items-center">
    //         <h1 className="my-2 font-bold text-lg">Social Media</h1>
    //         <div className="md:flex justify-center space-y-2 md:space-y-0">
              // <Link
              //   href="https://www.facebook.com/profile.php?id=61556670767727&mibextid=ZbWKwL"
              //   className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 md:ms-0 space-x-2"
              // >
              //   <Facebook />
              //   <span className="md:sr-only">Facebook</span>
              // </Link>
    //           <Link
    //             href="https://www.youtube.com/@official_findlet"
    //             className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 space-x-2"
    //           >
    //             <Youtube />
    //             <span className="flex md:sr-only">YouTube</span>
    //           </Link>
              // <Link
              //   href="https://www.tiktok.com/@official_findlet?_t=8lVI1AcK2Le&_r=1"
              //   className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5  space-x-2"
              // >
              //   <BiLogoTiktok className="text-2xl" />
              //   <span className="md:sr-only">Tiktok</span>
              // </Link>
              // <Link
              //   href="https://www.instagram.com/official_findlet?igsh=MTdib2kzOW80N3F4cQ=="
              //   className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 space-x-2"
              // >
              //   <Instagram />
              //   <span className="md:sr-only">Instagram</span>
              // </Link>
              // <Link
              //   href="https://whatsapp.com/channel/0029VaZdYTADeON7CwOTUa2g"
              //   className="flex text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5 space-x-2"
              // >
              //   <FaWhatsapp className="text-2xl" />
              //   <span className="md:sr-only">WhatsApp</span>
              // </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <hr className="my-4 border-gray-500 mx-auto dark:border-gray-700" />
    //     <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          // © {new Date().getFullYear()}{" "}
          // <Link
          //   href={"mailTo:obimkasomto@gmail.com"}
          //   target="_blank"
          //   className="hover:underline"
          // >
          //   Wence_Dev™
          // </Link>
          // . All Rights Reserved.
    //     </span>
    //   </div>
    // </footer>
  );
};

export default Footer;