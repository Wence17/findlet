import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <div className="bg-white">
      <h3 className="text-black text-lg md:text-2xl md:px-[120px] lg:px-[200px] my-6 mx-5 text-justify">We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the contact information provided below.</h3>
      <div className="flex flex-col justify-between items-center space-y-5 my-10 mx-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Support
          </h2>

          <p className="text-gray-700 text-sm md:text-lg text-justify">For assistance with orders, products, or any other inquiries, our dedicated customer support team is here to help.</p>
        </div>
      



      <div
        className=" md:flex md:items-center  md:justify-between md:px-[120px] lg:px-[200px] text-[#0264c7] font-semibold pb-10 space-y-10 md:space-y-0 lg:mb-10 mt-5 md:mt-0"
      >
        <div className="flex flex-col justify-center items-center space-y-8 w-[200px] text-center mx-auto">
          <MapPin className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] mx-auto" />
          <p className="text-black text-sm md:text-lg ">
            No. 8e Emmanuel street, Kubwa, Abuja
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-8 w-[200px] text-center mx-auto">
          <Mail className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] mx-auto" />
          <div>
            <p className="text-black  text-sm  md:text-lg ">
              findlet142@gmail.com
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center space-y-8 w-[200px] text-center  mx-auto">
          <PhoneCall className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] mx-auto" />
          <div>
            {" "}
            <p className="text-black text-sm md:text-lg ">+2348074902241</p>
            <p className="text-black text-sm md:text-lg  ">+2348131980794</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center space-y-5 my-10 mx-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          General Inquiries
          </h2>

          <p className="text-gray-700 text-sm md:text-lg text-justify">Have a general question or comment? We&apos;re all ears! Drop us a line and we&apos;ll get back to you as soon as possible.</p>
        </div>

      <ContactForm />
    </div>
  );
};

export default page;
