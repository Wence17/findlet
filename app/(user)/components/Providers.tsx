"use client"
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const CartProviders = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/payment/success"
      cancelUrl="http://localhost:3000/payment/payment/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default CartProviders;
