import React from 'react';
import 'main.css';
import Form from 'components/Form';

let ENV = import.meta.env;

function App() {
  return (
    <div className="flex w-full h-screen">
      {/* <h1 className="text-3xl font-bold text-red-500 underline text-center">
        {ENV.VITE_NAME}
      </h1> */}

      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>

      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>

      

    </div>
  );
}

export default App;
