import { useState } from "react";

export default function Content() {
  const [count, setCount] = useState(1);
  return (
    <div className="border border-gray-600 w-52 m-6 p-4 rounded">
      <div className="text-lg font-semibold">Count {count}</div>
      <div>
        <button
          className="border border-gray-900 rounded py-2 px-4 m-2 transition hover:bg-gray-500"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          className="border border-gray-900 rounded py-2 px-4 m-2 transition hover:bg-gray-500"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}
