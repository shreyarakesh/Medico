// WatsonAssistantLoader.jsx
import React, { useEffect } from 'react';

function WatsonAssistantLoader() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "0dae5611-2a66-4a27-a8f2-d2abda20fc5d", // Your integration ID
      region: "us-south", // Your region
      serviceInstanceID: "5644bf61-419a-4826-8c96-71ee4450b0b8", // Your service instance ID
      onLoad: async (instance) => {
        await instance.render();
      }
    };

    setTimeout(() => {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || 'latest') +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });

    // Optional cleanup function if needed
    return () => {
      // Remove the script tag when component unmounts to avoid duplicates
      const scripts = document.querySelectorAll('script[src*="WatsonAssistantChatEntry.js"]');
      scripts.forEach(script => script.parentNode.removeChild(script));
    };
  }, []);

  return null; // No visible UI for this component
}

export default WatsonAssistantLoader;
