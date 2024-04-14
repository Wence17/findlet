'use client'
import { Button } from '@/components/ui/button';
import { ProductCart } from '@/typings';
import React, { useState } from 'react'
import { paystackPay } from './action';

const CheckoutEmail = ({
    currency,
    // description,
    image,
    name,
    price,
    price_id
  }: ProductCart) => {

    
  const [email, setEmail] = useState<string>();
  const [submitting, setSubmitting] = useState<boolean>(false);

  async function buyNow(priceID:string) {
    setSubmitting(true);
    try {
      // Ensure totalPrice is defined and is a number
      const paystackResponse = await paystackPay({
        amount: price, //amount to be transacted by paystack
        email: email ?? "", //email of the person making the payment
        currency: "NGN", //currency eg KES or USD if you are in kenya
        callback_url: "https://findlet.vercel.app/payment/success", //route where paystack will redirect with reference code after a successful payment
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
        metadata: {
            custom_fields: [
                {
                    display_name: `{purchased by ${email}}`,
                    variable_name: `{${new Date().getTime()}${email}}`,
                    value: JSON.stringify({name, priceID})
                }
            ]
        }
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

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // Access the value from the event
    const value: string = e.target.value;
    setEmail(value);
  };

  const product = {
    name: name,
    // description: description,
    price: price,
    currency: currency,
    price_id: price_id,
  };

  return (
    <div className='absolute z-20 min-h-fit flex flex-col bg-zinc-200 rounded-md py-1 bottom-9 lg:w-[500px] md:w-[320px] w-fit -left-20 -right-20'>
        <div className="m-4 ">
              <input
                id="userEmail"
                name="userEmail"
                onChange={handleInputChange}
                type="email"
                className="mt-1 p-3 border border-gray-300 rounded w-full mb-4"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className='flex items-center justify-center'>
            <Button
            className='max-w-fit mb-5'
    //   variant={"secondary"}
      onClick={() => {
        buyNow(product.price_id);
        // FacebookPixel.track("ButtonClicked", { buttonType: "CheckOutNow" });
      }}
    >
       {submitting ? "Please wait ..." : "Ccntinue Checkout"}
    </Button>
            </div>
            
    </div>
  )
}

export default CheckoutEmail