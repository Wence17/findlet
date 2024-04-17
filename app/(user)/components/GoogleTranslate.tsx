'use client'
import { useEffect, useRef } from 'react';


const GoogleTranslate = () => {


  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined

    // This function will be called when the Google Translate script is loaded
    const googleTranslateElementInit = () => {
      if((window as any).google.translate.TranslateElement){

        // Clear the interval once the translation widget is initialized
        clearInterval(intervalId)

        // Initialize the translation widget
        new (window as any).google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
      }
      
    };
    
    intervalId = setInterval(googleTranslateElementInit, 100)
    
  }, []);

  return (
    <div id="google_translate_element" className=''></div>
  );
};

export default GoogleTranslate;