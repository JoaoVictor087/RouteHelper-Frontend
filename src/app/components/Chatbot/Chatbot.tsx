"use client"
import { useEffect } from 'react';

interface WatsonAssistantChatOptions {
    integrationID: string;
    region: string;
    serviceInstanceID: string;
    clientVersion?: string;
     onLoad?: (instance: { render: () => Promise<void> }) => Promise<void>;
}

declare global {
    interface Window {
        watsonAssistantChatOptions?: WatsonAssistantChatOptions;
    }
}

const Chatbot: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.watsonAssistantChatOptions = {
                integrationID: "e6926eb6-b640-461b-ad1a-c7a07fa4f7d9",
                region: "us-south",
                serviceInstanceID: "0bbccd0d-5c48-46b0-ab1a-99e9f15b9f04",
                onLoad: async (instance: { render: () => Promise<void> }) => {
                    await instance.render();
                }
            };

            const script = document.createElement('script');
            script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${window.watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`;
            script.async = true;
            document.head.appendChild(script);
        }

        return () => {
            const existingScript = document.querySelector(`script[src^="https://web-chat.global.assistant.watson.appdomain.cloud/versions/"]`);
            if (existingScript) {
                document.head.removeChild(existingScript);
                delete window.watsonAssistantChatOptions;
            }
        };
    }, []);

    return null;
};

export default Chatbot; 