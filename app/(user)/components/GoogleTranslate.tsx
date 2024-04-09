'use client'
import { useEffect, useRef } from 'react';


const GoogleTranslate = () => {

const googleTranslateRef= useRef(null)
// let intervalIdRef = useRef<number | undefined>()

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined
    // This function will be called when the Google Translate script is loaded
    const googleTranslateElementInit = () => {
      if((window as any).google && (window as any).google.translate && (window as any).google.translate.TranslateElement){

        // Clear the interval once the translation widget is initialized
        // if(intervalIdRef.current){
        // clearInterval(intervalIdRef.current)
        clearInterval(intervalId)
      // }

        // Initialize the translation widget
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: "en" ,
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE},
        googleTranslateRef.current
      );
      }
      
    };
    
    intervalId = setInterval(googleTranslateElementInit, 100)
    
    // // Load the Google Translate script dynamically
    // const script = document.createElement('script');
    // script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    // script.async = true;
    // document.body.appendChild(script);

    // // Cleanup function
    // return () => {
    //   if (intervalIdRef.current) {
    //     clearInterval(intervalIdRef.current);
    //   }
    //   document.body.removeChild(script);
    // };
  }, []);

  return (
    <div>
    <div id="googleTranslateRef" className='flex-1'>LNG</div>
    </div>
  );
};

export default GoogleTranslate;