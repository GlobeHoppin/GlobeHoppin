import { useState } from "react";
import { FaComments } from "react-icons/fa"; // Importing a chat icon

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat visibility
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Simulate bot response after a short delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response.", sender: "bot" },
        ]);
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      {!isChatOpen ? (
        // Chat icon when the chat window is closed
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-indigo-600 p-4 rounded-full text-white shadow-lg"
        >
          <FaComments size={24} /> {/* Chat icon */}
        </button>
      ) : (
        // Chat window when chat is open
        <div className="bg-white p-4 rounded-lg shadow-lg w-72">
          <div className="h-64 overflow-y-auto border-b-2 mb-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-2 rounded-lg mr-2"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>

          {/* Close chat button */}
          <button
            onClick={() => setIsChatOpen(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
