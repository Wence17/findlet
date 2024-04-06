import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Testimonial from "./components/Testimonial";
import { useEffect } from "react";
import FacebookPixel from 'react-facebook-pixel';



export default function Home() {

  // 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  //   src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
          <Hero />
          <Newest />
          <Testimonial />
    </div>
  );
}
