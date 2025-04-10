// components/VapiScript.tsx
"use client";
import { useEffect } from "react";
import Script from "next/script";

const VapiScript = () => {
    const buttonConfig = {
        position: "bottom-right",
        offset: "50px", // decide how far the button should be from the edge
        width: "50px", // min-width of the button
        height: "50px", // height of the button
        idle: { // button state when the call is not active.
          color: `rgb(93, 254, 202)`, 
          type: "pill", // or "round"
          title: "Have a quick question?", // only required in case of Pill
          subtitle: "Talk with our AI assistant", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
        },
        loading: { // button state when the call is connecting
          color: `rgb(93, 124, 202)`,
          type: "pill", // or "round"
          title: "Connecting...", // only required in case of Pill
          subtitle: "Please wait", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
        },
        active: { // button state when the call is in progress or active.
          color: `rgb(255, 0, 0)`,
          type: "pill", // or "round"
          title: "Call is in progress...", // only required in case of Pill
          subtitle: "End the call.", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
        },
      };

      useEffect(() => {
        // Function to get call count from localStorage
        const getCallCount = () => {
            if (typeof window !== 'undefined') {
                const callCount = localStorage.getItem('vapiCallCount');
                return callCount ? parseInt(callCount, 10) : 0;
            }
            return 0;
        };
        
        // Only apply z-index fix if user hasn't called more than 3 times
        const callCount = getCallCount();
        setTimeout(() => {
                // Look for the Vapi button element and force its z-index
          const vapiButton = document.getElementById('vapi-support-btn');
          console.log(vapiButton,callCount);
          if (vapiButton) {
                      // @ts-ignore
            vapiButton.style.zIndex =    "9999" ;
            if(callCount > 7  && callCount ){
              vapiButton.style.display =  "none"
            }
          }
        }, 1000); // Check every second
            
    }, []);

    // Function to increment call count when a call starts
    const incrementCallCount = () => {
        if (typeof window !== 'undefined') {
            const currentCount = localStorage.getItem('vapiCallCount');
            const newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;
            localStorage.setItem('vapiCallCount', newCount.toString());
        }
    };

    return (
        <Script
            src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
            strategy="afterInteractive"
            onLoad={() => {
                (window as any).vapiSDK.run({
                    apiKey: process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "",         // Using environment variable
                    assistant: process.env.NEXT_PUBLIC_VAPI_ASISTANT_ID || "",     // Using environment variable
                    config: buttonConfig,              // Optional: Modify as required.
                });
                
                // If Vapi doesn't support onCallStarted, we need to find another way to track calls
                // This is a backup approach:
                document.addEventListener('click', (e) => {
                  if(e.target){
                    if(e.target instanceof HTMLElement && e.target.id.includes("vapi")){
                      incrementCallCount();
                    }
                  }
                   
                });
            }}
        />
    );
};

export default VapiScript;
