import React from 'react';

function App() {
  return (
    <div className="flex bg-no-repeat bg-center h-screen w-screen bg-[url('https://cdn.pixabay.com/photo/2023/02/13/06/24/ai-7786589_1280.png')]">
      {/* Left side content */}
      <div className="w-1/2  p-4 rounded-lg ">
        <h1 className='font-sans text-9xl '>Your very own food bot at service...</h1>
      </div>

      {/* Right side iframe with the embedded chatbot */}
      <iframe
        className="w-1/2 h-screen bg-gray-200 p-4 rounded-lg max-w-sm mx-auto"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/c8dca3ba-7b28-424e-be92-616bd335885c"
        title="Chatbot"
      ></iframe>
    </div>
  );
}

export default App;
