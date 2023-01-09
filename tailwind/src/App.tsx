import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-600 w-screen h-screen flex justify-center items-center">
      <h1 className="f">Hello World</h1>
    </div>
  );
}

export default App;
