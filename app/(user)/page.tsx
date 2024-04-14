import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Testimonial from "./components/Testimonial";

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'



export default function Home() {

      // FacebookPixel.pageView();
      
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


// Obimka Wenceslaus
// obimkasomto@gmail.com
