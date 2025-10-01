"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    // Load Tawk.to script
    if (!document.getElementById("tawk-script")) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      const script = document.createElement("script");
      script.id = "tawk-script";
      script.async = true;
      script.src = "https://embed.tawk.to/56b5ee4b5d8a6c387d767f3d/default";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Configure Tawk.to to appear on the left side
    if (window.Tawk_API) {
      window.Tawk_API.customStyle = {
        visibility: {
          desktop: {
            position: "bl",
            xOffset: 10,
            yOffset: 0
          },
          mobile: {
            position: "bl",
            xOffset: 0,
            yOffset: 0
          }
        }
      };
    }

    return () => {
      // Cleanup to prevent duplications
      const script = document.getElementById("tawk-script");
      if (script) {
        script.remove();
      }
    };
  }, []);

  return null;
}