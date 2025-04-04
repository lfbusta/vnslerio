import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { TbTopologyStarRing } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

export default function Copilot() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [response, setResponse] = useState("");

  function handleClickAiButton() {
    if (isOpen) {
      if (!isThinking) {
        setIsThinking(true);
        getResponse();
      } else {
        setIsThinking(false);
      }
    } else {
      setIsOpen(!isOpen);
    }
  }

  async function getResponse() {
    setIsThinking(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsThinking(false);
    setResponse(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    );
  }

  return (
    <div className="absolute bottom-0 right-0 top-0 flex flex-col justify-end p-3 min-w-64 max-w-128">
      {response && (
        <div className="rounded-md bg-white p-2 mb-2">{response}</div>
      )}
      <div className="relative flex items-center h-16 justify-end">
        <div
          className={twMerge(
            "flex items-center border border-gray-200 m-2 rounded-full overflow-x-hidden transition-all duration-300 ease-in-out bg-white shadow-md",
            isOpen ? "w-full" : "w-0"
          )}
        >
          <button
            className=" text-white h-10 w-8 flex items-center pl-1 justify-center bg-sky-500"
            onClick={() => {
              setIsThinking(false);
              setIsOpen(false);
            }}
          >
            <FaChevronRight />
          </button>
          <input
            type="text"
            placeholder="Ask me anything..."
            className="py-2 pl-2 pr-15"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          className="absolute bottom-0 right-0 bg-white w-16 h-16 rounded-full shadow-md hover:scale-110 transition-all duration-300 ease-in-out overflow-hidden"
          onClick={handleClickAiButton}
        >
          <div className="w-full h-full bg-radial from-white from-10% to-80% to-sky-500 rounded-full flex items-center justify-center">
            <TbTopologyStarRing
              className={twMerge(
                "text-sky-500 w-8 h-8",
                isThinking && "animate-spin"
              )}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
