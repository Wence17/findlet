import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import thankyou from "@/public/assets/images/thank you.jpg";
import { verifyPaystackTransaction } from "../../components/action";


interface PageProps {
  searchParams?: {
    trxref: string;
    reference: string;
  };
}


const SuccessPayment: React.FC<PageProps> = async ({ searchParams }) => {
  
  try {
    if (searchParams) {
      if (searchParams.reference && searchParams.trxref) {
        //please retry payment verification multiple times to avoid errors associated with payment confirmation
        const paymentStatus = await verifyPaystackTransaction({
          reference: searchParams.reference,
        });

        if (paymentStatus) {
          if (
            paymentStatus.status === true &&
            paymentStatus.data.status === "success"
          ) {
            console.log(paymentStatus)
          }
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto" />
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Transaction Successful
        </h2>
        <p className="text-gray-600 mb-2">
          Your patronage is warmly appreciated. We hope you enjoy it. We will reach out to you through your mail.
        </p>
        <Image
          className="w-full h-auto rounded"
          src={thankyou}
          alt="Success Image"
        />
        <p className="text-gray-600 mt-2">
          We appreciate your support. Have a great day!
        </p>
        <Button asChild className="my-5">
          <Link href={"/"}>Go Back</Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPayment;
