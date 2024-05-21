"use client";
import { Button } from "@/components/ui/button";
// import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { paystackPay } from "./action";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type FormDetails = {
  fullName: string;
  phoneNumber: string;
  alternativePhoneNumber: string;
  country: string;
  state: string;
  address: string;
  email: string;
};

const ShoppingCartModal = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDetails>();


  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // Access the value from the event
  //   const { name, value } = e.target as HTMLFormElement;
  //   setFormDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [name]: value,
  //   }));
  //   console.log("formDetails",formDetails)
  //   // const target =e.target as HTMLFormElement
  //   // const formData = new FormData(target);
  //   // const updatedFormDetails = {} as typeof formDetails;
  //   // formData.forEach((value, key) => {
  //   //   updatedFormDetails[key] = value;
  //   // });
  //   // setFormDetails(updatedFormDetails);
  // };
  // async function handleCheckoutClick(e: SubmitHandler<FormData>) 
  const handleCheckoutClick: SubmitHandler<FormDetails> = async (
    data,e)=>{
    e?.preventDefault();
    setSubmitting(true);
    console.log("data",data)
    try {
      // Ensure totalPrice is defined and is a number
      const paystackResponse = await paystackPay({
        amount: totalPrice ?? 0, //amount to be transacted by paystack
        email: data.email ?? "", //email of the person making the payment
        currency: "NGN", //currency eg KES or USD if you are in kenya
        callback_url: "https://findlet.ng/payment/success", //route where paystack will redirect with reference code after a successful payment
        // callback_url: "http://localhost:3000/payment/success",
        channels: [
          "mobile_money",
          "card",
          "bank",
          "ussd",
          "bank_transfer",
          "eft",
          "qr",
        ], //channel to be used for making payment eg bank mobile_money
        // metadata: {
        //   custom_fields: [
        //     {
        //       display_name: `{purchased by ${formDetails.email}}`,
        //       variable_name: `{${new Date().getTime()}${formDetails.email}}`,
        //       value: JSON.stringify(
        //         Object.values(cartDetails ?? {}).map(
        //           ({ name, quantity, price_id }) => ({
        //             name,
        //             quantity,
        //             price_id,
        //           })
        //         )
        //       ),
        //     },
        //   ],
        // },
        metadata: {
          custom_fields: [
            {
              display_name: "Purchased by",
              variable_name: "purchased_by",
              value: data.fullName,
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: data.phoneNumber,
            },
            {
              display_name: "Alternative Phone Number",
              variable_name: "alternative_phone_number",
              value: data.alternativePhoneNumber,
            },
            {
              display_name: "Country",
              variable_name: "country",
              value: data.country,
            },
            {
              display_name: "State and City",
              variable_name: "state_city",
              value: data.state,
            },
            {
              display_name: "Delivery Address",
              variable_name: "address",
              value: data.address,
            },
            {
              display_name: "Cart Details",
              variable_name: "cart_details",
              value: JSON.stringify(
                Object.values(cartDetails ?? {}).map(
                  ({ name, quantity, price_id }) => ({
                    name,
                    quantity,
                    price_id,
                  })
                )
              ),
            },
          ],
        },
      });
      setSubmitting(false);
      if (paystackResponse.status === true) {
        window.location.href = paystackResponse.data.authorization_url; //extract the redirection and user it for redirecting the donor to the unique page generated for them to make payment
      }
      console.log("paystack Response", paystackResponse);
    } catch (error) {
      console.log("this error ocurred while trying to reach paystack", error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw] overflow-scroll">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className=" flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                // eslint-disable-next-line react/no-unescaped-entities
                <h1 className=" py-6 mb-6">You don't have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6 mb-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-md">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">₦{entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {/* {entry.description} */}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>₦{totalPrice}</p>
            </div>

            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="my-4">
              <form action="" onSubmit={handleSubmit(handleCheckoutClick)} className="">
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="name"
                  className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                  {...register("fullName", { required: true })}
                  placeholder="Surname FirstName Others"
                  required
                />
                <label className="block text-sm font-medium text-gray-600">
                  Active Phone Number
                </label>
                <input
                  {...register("phoneNumber", { required: true })}
                  type="tel"
                  className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                  placeholder="Enter your phone number"
                  required
                />
                <label className="block text-sm font-medium text-gray-600">
                  Alternative Phone Number
                </label>
                <input
                  {...register("alternativePhoneNumber")}
                  type="tel"
                  className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                  placeholder="Enter your alternaive number"
                />
                <label className="block text-sm font-medium text-gray-600">
                  Country
                </label>
                <input
                  {...register("country", { required: true })}
                  type="text"
                  className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                  placeholder="Enter your Country"
                  required
                />
                <label className="block text-sm font-medium text-gray-600">
                  State and City
                </label>
                <input
                  {...register("state", { required: true })}
                  type="text"
                  className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                  placeholder="City, State"
                  required
                />
                <label className="block text-sm font-medium text-gray-600">
                  Delivery Address
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                  placeholder="Enter your delivery address"
                  required
                />
                <label
                  htmlFor="userEmail"
                  className="block text-sm font-medium text-gray-600"
                >
                  Enter Your Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                  placeholder="Enter your email"
                  required
                />
              <button type="submit" className="w-full bg-blue-700 px-3 py-2 rounded mt-6"> {submitting ? "Please wait ..." : "Checkouts"}</button>
              </form>
            </div>

            {/* <div className="mt-6">
              <Button onClick={handleCheckoutClick} className="w-full">
                {submitting ? "Please wait ..." : "Checkouts"}
              </Button>
            </div> */}

            <div className="mt-6 flex justify-center text-center text-base font-medium text-primary hover:text-primary/80">
              <Link
                href={"/OnDelivery"}
                // target="_blank"
                onClick={() => {
                  // FacebookPixel.track('ButtonClicked', { buttonType: 'On Delivery' });
                  return handleCartClick();
                }}
              >
                Payment on Delivery
              </Link>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
