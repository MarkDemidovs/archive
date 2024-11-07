import { useEffect, useState } from "react";

interface DemoProps{}

export default function App({}: DemoProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run.
    console.log("The count is:", count);
    
        

    // Optional return function
    return() => {
      console.log("I am being cleaned up!");
    }
  }, [count]) // What it should listen for.

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}