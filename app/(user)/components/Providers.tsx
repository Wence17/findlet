"use client"
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const CartProviders = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://findlet.vercel.app/payment/success"
      cancelUrl="https://findlet.vercel.app/payment/error"
      currency="NGN"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"

    >
      {children}
    </CartProvider>
  );
};

export default CartProviders;
