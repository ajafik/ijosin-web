import React from 'react';
import 'main.css';

let ENV = import.meta.env;

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-red-500 underline text-center">
        {ENV.VITE_NAME}
      </h1>

    </div>
  );
}

export default App;
