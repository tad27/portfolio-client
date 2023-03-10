import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun, System } from "./icons";

function ThemeToggle({ className }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleRef = useRef(null);
  const dropdownRef = useRef(null);

  const changeTheme = (value) => {
    setTheme(value);
    setDropdownOpen(false);
  };

  const options = [
    {
      icon: "sun",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "system",
      text: "system",
    },
  ];

  // Close dropdown when click outside
  useEffect(() => {
    function clickOutsideHandler(e) {
      if (
        toggleRef.current &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [dropdownRef]);

  return (
    <div className={classNames("relative", className)}>
      <button
        title="Theme"
        ref={toggleRef}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`${
          !dropdownOpen && "focus focus:text-brand "
        } rounded p-4 text-dark transition-all hover:bg-mid hover:opacity-75 dark:text-mid dark:hover:bg-dark`}
      >
        <label className="sr-only">Toggle Theme</label>
        {theme === "dark" && <Moon className="h-8 w-8 stroke-[3]" />}
        {theme === "light" && <Sun className="h-8 w-8 stroke-[3]" />}
        {theme === "system" && <System className="h-8 w-8 stroke-[3]" />}
      </button>
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className=" absolute top-full -right-4 flex flex-col rounded-md border-2 border-light bg-lightest py-4 shadow-lg dark:border-gray/20 dark:bg-dark"
        >
          {options?.map((selectedTheme) => (
            <button
              key={selectedTheme?.text}
              onClick={() => changeTheme(selectedTheme?.text)}
              className={classNames(
                theme === selectedTheme?.text && "!text-brand",
                "focus flex items-center gap-2 rounded py-4 px-8 text-dark transition-all hover:bg-light/40 hover:opacity-75 focus:text-brand dark:text-mid dark:hover:bg-gray"
              )}
            >
              {selectedTheme?.icon === "moon" && (
                <Moon className="h-8 w-8 stroke-[3]" />
              )}
              {selectedTheme.icon === "sun" && (
                <Sun className="h-8 w-8 stroke-[3]" />
              )}
              {selectedTheme.icon === "system" && (
                <System className="h-8 w-8 stroke-[3]" />
              )}
              <span className="text-sm capitalize">{selectedTheme.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
