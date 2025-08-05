import React, { useEffect } from 'react';

const VoiceAssistant = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
        <vapi-widget
          assistant-id="cd61bfce-df76-4f93-968c-4e18161b139f"
          public-key="a01c0a73-b219-492f-b2ff-7ee52d94b1e7"
        ></vapi-widget>
      </div>
    </>
  );
};

export default VoiceAssistant;
