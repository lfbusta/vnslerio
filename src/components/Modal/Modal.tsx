import Accordion from "../Accordion";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const data = [
  {
    title: "Accordion 1",
    info: "Info 1",
    content: (
      <>
        <div className="flex flex-col col-span-1">
          <label
            htmlFor="name"
            className="text-xs font-bold uppercase text-gray-400 ml-1"
          >
            Some Other Label
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-200 rounded-md px-2 py-1 my-1"
          />
        </div>
        <div className="flex flex-col col-span-1">
          <label
            htmlFor="name"
            className="text-xs font-bold uppercase text-gray-400 ml-1"
          >
            Some Other Other Label
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-200 rounded-md px-2 py-1 my-1"
          />
        </div>
        <div className="flex flex-col col-span-1">
          <label
            htmlFor="name"
            className="text-xs font-bold uppercase text-gray-400 ml-1"
          >
            Some Other Other Other Label
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-200 rounded-md px-2 py-1 my-1"
          />
        </div>
        <div className="flex flex-col col-span-1">
          <label
            htmlFor="name"
            className="text-xs font-bold uppercase text-gray-400 ml-1"
          >
            Last Label, I Promise.
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-200 rounded-md px-2 py-1 my-1"
          />
        </div>
        <button
          type="button"
          className="flex justify-center col-span-2 text-xs font-bold text-purple-800"
          onClick={() => {
            alert("Run out of time, this is not implemented.");
          }}
        >
          Show more...
        </button>
      </>
    ),
  },
  {
    title: "Accordion 2",
    info: "Info 2",
    content: "Content 2",
  },
  {
    title: "Accordion 3",
    info: "Info 3",
    content: "Content 3",
  },
  {
    title: "Accordion 4",
    info: "Info 4",
    content: "Content 4",
  },
  {
    title: "Accordion 5",
    info: "Info 5",
    content: "Content 5",
  },
  {
    title: "Accordion 6",
    info: "Info 6",
    content: "Content 6",
  },
  {
    title: "Accordion 7",
    info: "Info 7",
    content: "Content 7",
  },
  {
    title: "Accordion 8",
    info: "Info 8",
    content: "Content 8",
  },
  {
    title: "Accordion 9",
    info: "Info 9",
    content: "Content 9",
  },
];

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function Modal({ title }: ModalProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([
    "Option 1",
    "Option 2",
    "Option 3",
  ]);

  return (
    <div className="bg-white flex flex-col rounded-lg w-[80vw] min-w-200 max-w-300 h-[80vh]">
      {/* Header */}
      <div className="flex justify-between items-center min-w-64 p-4 mb-2 shadow-md">
        <h1 className="text-xl">{title}</h1>
        <button className="text-gray-400 hover:text-gray-600 hover:cursor-pointer p-1">
          <FaXmark className="w-5 h-5" />
        </button>
      </div>
      {/* Body */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <form>
          <div className="flex flex-col mb-2 p-4 border-b-2 border-gray-200">
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase text-gray-400 ml-1"
              >
                Some Label
              </label>
              <button
                type="button"
                className="flex items-center justify-end text-xs font-bold text-purple-800"
                onClick={() => {
                  setOptions([...options, `Option ${options.length + 1}`]);
                  setSelectedOptionIndex(options.length);
                }}
              >
                <FaPlusCircle className="mr-1" />
                Add new Option
              </button>
            </div>
            <select
              id="name"
              className="border border-gray-200 rounded-md px-2 py-1 my-1"
              value={options[selectedOptionIndex]}
              onChange={(e) =>
                setSelectedOptionIndex(
                  parseInt(e.target.selectedOptions[0].dataset.index || "0")
                )
              }
            >
              <option value="">Select an Option</option>
              {options.map((option, index) => (
                <option key={index} value={option} data-index={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="p-4 pt-0">
            {data.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                info={item.info}
                onClickAdd={() => {
                  alert("Run out of time, this is not implemented.");
                }}
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        </form>
      </div>
      {/* Footer */}
      <div className="flex justify-end items-center p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button className="border border-gray-200 rounded-md px-2 shadow-sm transition-all duration-100 hover:shadow-md hover:bg-slate-50 active:shadow-xs active:scale-95 hover:cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
}
