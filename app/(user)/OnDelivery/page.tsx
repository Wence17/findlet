import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const OnDelivery = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <h1 className="capitalize font-bold text-red-700 text-lg md:text-3xl mb-4 md:mb-10 text-center">
          Urgent notice before placing your order
        </h1>
        <ol className="list-decimal mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl text-justify">
          <li>
            Kindly refrain from ordering if you are unable to receive your
            delivery within the next 3 to 5 business days.
          </li>
          <li>
            Our shipping process relies on trust. We invest in sending the
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            product to your location and it's disheartening if it goes
            undelivered due to reasons such as lack of funds or frivolous
            excuses.
          </li>
          <li>
            Instances like lack of funds, travel plans, or casual orders are
            unfair and disappointing. We incur cost to ship the product via
            courier service.
          </li>
          <li>
            Ensure that the amount is prepared prior to placing your order.
          </li>
        </ol>
      </div>

      <div className="mt-6 flex justify-center">
          <Link href={"https://forms.gle/RpWLtNdLqKg3ASqJ7"} target="_blank" passHref>
        <Button className="w-fit rounded-full font-semibold text-lg px-8 py-4">
            Proceed
        </Button>
          </Link>
      </div>
    </div>
  );
};

export default OnDelivery;
