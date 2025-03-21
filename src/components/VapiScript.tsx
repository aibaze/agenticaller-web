// components/VapiScript.tsx
"use client";
import Script from "next/script";

const VapiScript = () => {
    const buttonConfig = {
        position: "right",
        offset: "40px", // decide how far the button should be from the edge
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
  return (
    <Script
      src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
      strategy="afterInteractive"
      onLoad={() => {
        (window as any).vapiSDK.run({
          apiKey: "a6f1a862-5d3d-41c3-a1a8-312a44238312",         // Substitute with your Public key from Vapi Dashboard.
          assistant:  "d03824fe-2261-4929-8b01-124e01f40a26", 
          config: buttonConfig              // Optional: Modify as required.
        });
      }}
    />
  );
};

export default VapiScript;
