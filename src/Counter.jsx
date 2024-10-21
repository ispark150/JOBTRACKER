import { useState } from "react";
function Counter() {
  let [count, setCount] = useState(10);

  let incount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={incount}>Inc Count</button>
    </div>
  );
}
export default Counter;
