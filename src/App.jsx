import { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";

function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="whatsapp_container">
      <div className="flex flex-col items-center whatsapp_wrapper">
        <div className="mb-4 whatsapp_title">
          <h2 className="block text-xl font-medium text-gray-900">
            Quick WhatsApp Messenger
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-y-2 whatsapp_form"
        >
          <div className="flex flex-col gap-y-2 whatsapp_input">
            <div className="whatsapp_number">
              <PhoneInputWithCountrySelect
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={number}
                onChange={setNumber}
                className="w-full px-4 py-2 border-2 rounded-xl"
              />
            </div>
            <div className="whatsapp_message">
              <input
                id="whatsapp_message"
                type="text"
                placeholder="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border-2 rounded-xl"
              />
            </div>
          </div>
          <div className="whatsapp_button">
            <button
              type="submit"
              disabled={!number}
              className="px-4 py-2 text-white bg-gray-900 border-2 cursor-pointer rounded-xl disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Chat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
