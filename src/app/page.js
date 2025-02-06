"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [fontSize, setFontSize] = useState("text-2xl");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Adjust font size based on input length
  useEffect(() => {
    if (input.length > 10) {
      setFontSize("text-xl");
    } else if (input.length > 15) {
      setFontSize("text-lg");
    } else {
      setFontSize("text-2xl");
    }
  }, [input]);

  // Toggle dark mode class on the root HTML element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle button clicks for calculator input
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
      setInput("");
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      const lastChar = input.slice(-1);
      const isOperator = ["+", "-", "*", "/"].includes(value);
      const isLastCharOperator = ["+", "-", "*", "/"].includes(lastChar);

      if (isOperator && isLastCharOperator) {
        setInput(input.slice(0, -1) + value);
      } else if (isOperator && input === "") {
        setInput(result + value);
      } else {
        setInput(input + value);
      }
    }
  };

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-col items-center mt-[-50px] justify-center min-h-screen p-4 bg-background text-foreground">
      <button
        onClick={toggleTheme}
        className="mb-4 p-2 w-12 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
      <div className="w-[360px] border-2 border-gray-400 dark:border-gray-600 rounded-lg p-12">
        <div className="p-4 border-b border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800">
          <div className={`text-right ${fontSize} text-gray-900 dark:text-gray-100 overflow-hidden`}>{input || "0"}</div>
          <div className="text-right text-2xl text-gray-600 dark:text-gray-400">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-4 w-[290px] ml-[-16px]">
          {["7", "8", "9", "/"].map((item) => (
            <button key={item} className="p-4 border rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100" onClick={() => handleButtonClick(item)}>
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button key={item} className="p-4 border rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100" onClick={() => handleButtonClick(item)}>
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button key={item} className="p-4 border rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100" onClick={() => handleButtonClick(item)}>
              {item}
            </button>
          ))}
          {["C", "0", "=", "+"].map((item) => (
            <button key={item} className="p-4 border rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100" onClick={() => handleButtonClick(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}