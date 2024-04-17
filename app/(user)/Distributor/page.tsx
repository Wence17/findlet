"use client";
import { client } from "@/sanity/lib/client";
import { allProductsQuery } from "@/sanity/lib/query";
import { SimplifiedProduct } from "@/typings";
import { ArrowRight, Mail, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import distributor from "@/public/assets/images/Distributor.jpg";
// import FacebookPixel from 'react-facebook-pixel';

const AllProducts = () => {
  const [products, setProducts] = useState<SimplifiedProduct[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const product = await client.fetch(allProductsQuery);
        setProducts(product);
      } catch (error) {
        console.log(
          "encountered error while trying to fetch AllProducts",
          error
        );
      }
    };

    //   FacebookPixel.pageView();

    handleFetch();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 md:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Want To Be A Distributor?
          </h2> */}
          <Image
            src={distributor}
            // src={'/assets/images/Veen-bg-2.jpg'}
            alt={"veen"}
            className="md:h-fit w-fit object-cover object-center shadow-lg rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold tracking-tight text-gray-600 pt-6">
            EARN EXTRA INCOME
          </p>
        </div>
        <p className="flex mt-3 text-base text-gray-500 tracking-wide text-justify">
          Earn at least a 6-figure income monthly, following simple steps. If we
          accept you as our distributor, It becomes our responsibility to send
          you products + buyers list While you ensure efficient delivery to our
          customers.
        </p>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl font-semibold tracking-tight text-gray-600 pt-5">
            Here&apos;s Exactly How It Works In Few Steps
          </p>
          <ul className="list-disc mx-auto max-w-2xl lg:px-4 px-6 pt-2 lg:max-w-7xl text-justify">
            <li>
              We sell problem solving products that people will always rush to
              buy
            </li>
            <li>You buy the products from us at very good discounts in bulk</li>
            <li>
              Our team of digital marketers will then send you list of customers
              to buy from you at retail prices after 3 days of purchase.{" "}
            </li>
          </ul>
        </div>

        <p className="text-red-600 font-semibold text-base pt-5 text-justify">
          In summary, we’re giving you both goods and customers to sell to. SO
          all you do is simply deliver to the customers and take cash on
          delivery With this process, 6 figures weekly profit is very possible.
        </p>

        <p className="italic font-bold text-lg my-5">
          Hmmm... What If We Fail To Send Customers?{" "}
        </p>
        <p className="text-base text-gray-500 tracking-wide text-justify">
          In rare occasions where we’re unable to send customers within the
          stipulated timeframe, distributors can request for a capital refund of
          unsold items. This process takes about 2 weeks.
        </p>
        <p className="text-base text-gray-500 tracking-wide text-justify pt-5">
          The reason is to allow us process the request and retrieve items. This
          clearly makes this a risk free opportunity.
        </p>

        <h3 className="text-2xl font-semibold tracking-tight text-gray-600 pt-6">
          You Know What?{" "}
        </h3>
        <p className="text-base text-gray-500 tracking-wide text-justify py-2">
          To Further Prove That This is Real... If you scale through our process
          as I will share with you soon, we&apos;ll send you a small list of
          buyers you can call to confirm. And this is even before you pay us a
          dime.{" "}
        </p>

        <h3 className="text-lg font-semibold tracking-tight text-gray-600 pt-6">
          There are some terms though…
        </h3>
        <ul className="list-disc mx-auto max-w-2xl lg:px-4 px-6 pt-2 lg:max-w-7xl text-justify">
          <li>
            Distributors must contact customers assigned and provide update at
            most 3hours after assignment.
          </li>
          <li>
            Distributors must deliver to customers assigned at most 48hours.
          </li>
        </ul>
        {/* packages */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-16">
            SELECT A PACKAGE
          </h1>
          <p className="text-base text-gray-500 tracking-wide text-justify py-2">
            Pick a package that best fits your financial goals. All packages
            higher still enjoy the benefits listed in lower packages. We also
            have packages for affiliates and mini distributors, such as students
            who want to launch their career on the path of findlet
            entrepreneurship.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-square w-full flex flex-col items-center justify-center space-y-6 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  Starter Pack
                </p>
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  10% Discount
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-700">
                  20 Units of Each Product
                </h3>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-square w-full flex flex-col items-center justify-center space-y-6 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  Business Builder Pack
                </p>
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  20% Discount
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-700">
                  40 Units of Each Product
                </h3>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-square w-full flex flex-col items-center justify-center space-y-6 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  Premium Pack
                </p>
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  30% Discount
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-700">
                  60 Units of Each Product
                </h3>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-square w-full flex flex-col items-center justify-center space-y-6 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  Custom Pack
                </p>
                <p className="text-2xl font-extrabold text-blue-600 text-center">
                  40% Discount
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-700">
                  80 Units of Each Product and above
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products
          </h2>
        </div>
        <div className="my-6 grid md:grid-cols-3 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ₦{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 my-5 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-5 contact_options md:mx-24">
          <article className="flex flex-col items-center bg-color-bg-variant p-5 rounded-[1.2rem] text-center  border border-solid border-transparent transition-all duration-[400ms] ease-in-out hover:bg-[#fff] hover:bg-transparent hover:border-color-primary-variant contact_option">
            <Mail className="text-2xl mb-2" />
            <h4 className=" ">Email</h4>
            <h5 className=" ">findlet142@gmail.com</h5>
            <Link
              href={"mailTo:findlet142@gmail.com"}
              target="_blank"
              className="mt-3 inline-block text-xs"
            >
              {" "}
              Send a message
            </Link>
          </article>
          <article className="flex flex-col items-center bg-color-bg-variant p-5 rounded-[1.2rem] text-center  border border-solid border-transparent transition-all duration-[400ms] ease-in-out hover:bg-[#fff] hover:bg-transparent hover:border-color-primary-variant contact_option">
            <MessageCircleMore className="text-2xl mb-2" />
            <h4 className="text-center ">Messenger</h4>
            <h5 className="text-center ">FindLet</h5>
            <Link
              href={"https://m.me/258738313985769?source=qr_link_share"}
              target="_blank"
              className="mt-3 inline-block text-xs"
            >
              {" "}
              Send a message
            </Link>
          </article>
          <article className="flex flex-col items-center bg-color-bg-variant p-5 rounded-[1.2rem] text-center  border border-solid border-transparent transition-all duration-[400ms] ease-in-out hover:bg-[#fff] hover:bg-transparent hover:border-color-primary-variant contact_option">
            <BsWhatsapp className="text-2xl mb-2" />
            <h4 className="text-center ">WhatsApp</h4>
            <h5 className="text-center ">+2348074902241</h5>
            <Link
              href={"https://api.whatsapp.com/send?phone=2348074902241"}
              target="_blank"
              className="mt-3 inline-block text-xs"
            >
              {" "}
              Send a message
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
