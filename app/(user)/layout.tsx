import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "use-shopping-cart";
import CartProviders from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";

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
      <body className={inter.className}>
        <CartProviders>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProviders>
      </body>
    </html>
  );
}
