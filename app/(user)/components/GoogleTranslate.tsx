'use client'
import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // This function will be called when the Google Translate script is loaded
    const googleTranslateElementInit = () => {
      // Initialize the translation widget
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
    
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onload = googleTranslateElementInit; 
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTranslate;




// import Script from 'next/script';
// import { useEffect } from 'react';

// const GoogleTranslate = () => {
//   useEffect(() => {
//     // This function will be called when the Google Translate script is loaded
//     const googleTranslateElementInit = () => {
//       // Initialize the translation widget
//       new (window as any).google.translate.TranslateElement(
//         { pageLanguage: 'en' },
//         'google_translate_element'
//       );
//     };

//     // Load the Google Translate script dynamically
//     const script = document.createElement('script');
//     script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup function
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null;
// };


// export default GoogleTranslate;
