import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");

  return (
    <div className="flex gap-x-5">
      <div>
        <label
          htmlFor="price"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Number
        </label>
        <div className="flex gap-x-4 mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              $
            </div> */}
            <input
              id="price"
              name="price"
              type="text"
              placeholder="0.00"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            {/* <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <select
                id="currency"
                name="currency"
                aria-label="Currency"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div> */}
          </div>
          <button
            onClick={() => {
              alert("Chat with " + number);
              window.location.href = "https://wa.me/" + number;
            }}
          >
            Chat
          </button>
        </div>
      </div>
      {/* <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      /> */}
    </div>
  );
}

export default App;
