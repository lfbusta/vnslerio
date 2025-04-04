import { FaChevronRight, FaInfoCircle, FaPlusCircle } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  info?: string;
  onClickAdd?: () => void;
}

export default function Accordion({
  children,
  title,
  info,
  className,
  onClickAdd,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [children]);

  return (
    <div className={twMerge("border-b-2 border-gray-200", className)}>
      <div className="text-sm font-bold flex items-center py-3 w-full">
        <button
          type="button"
          className="flex items-center flex-1 hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaChevronRight
            className={`text-gray-500 transition-transform duration-100 ease-in-out mr-2 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
          <h2 className="mr-2">{title}</h2>
          {info && <FaInfoCircle className="text-gray-500" title={info} />}
        </button>
        {onClickAdd && (
          <button
            type="button"
            onClick={onClickAdd}
            className={twMerge(
              "flex items-center justify-end text-xs font-bold text-purple-800 ml-2 hover:cursor-pointer",
              isOpen ? "" : "hidden"
            )}
          >
            <FaPlusCircle className="mr-0.5" />
            Add New
          </button>
        )}
      </div>
      <div
        ref={contentRef}
        className={`transition-all duration-100 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[var(--content-height)]" : "max-h-0"
        }`}
        style={
          {
            "--content-height": contentHeight,
          } as React.CSSProperties
        }
      >
        <div className="grid grid-cols-2 gap-4 py-2 px-6">{children}</div>
      </div>
    </div>
  );
}
