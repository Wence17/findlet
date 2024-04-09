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
// import FacebookPixel from "react-facebook-pixel";

const ShoppingCartModal = () => {

  // const [email, setEmail] = useState('')
  // const [amount, setAmount] = useState('')
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(e: any) {
    // FacebookPixel.track('ButtonClicked', { buttonType: 'HandleCheckout' });
    e?.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("This result error happened during redirectToCheckout", result);
      }
    } catch (error) {
      console.log("This error happened during redirectToCheckout", error);
    }
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                // eslint-disable-next-line react/no-unescaped-entities
                <h1 className=" py-6">You don't have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
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
                            {entry.description2}
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

            <div className="mt-6">
              <Button onClick={handleCheckoutClick} className="w-full">
                Checkouts
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-base font-medium text-primary hover:text-primary/80">
              <Link href={"/OnDelivery"} 
              // target="_blank"
                  onClick={() => {
                    // FacebookPixel.track('ButtonClicked', { buttonType: 'On Delivery' });
                    return handleCartClick()}}
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
