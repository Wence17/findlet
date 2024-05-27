import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "use-shopping-cart";
import CartProviders from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";
import Script from "next/script";
import FacebookPixel from "./components/FacebookPixel";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Findlet",
  description: "Your gateway to great finds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
      </Script>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <noscript>
          <Image
            height="1"
            width="1"
            alt=""
            className="hidden"
            src={`https://www.facebook.com/tr?id=${process.env.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <CartProviders>
          <Navbar />
          <ShoppingCartModal />
            <ToastContainer />
          {children}
          <Footer />
          <FacebookPixel />
        </CartProviders>
        <Script
          type="text/javascript"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ></Script>
      </body>
    </html>
  );
}
