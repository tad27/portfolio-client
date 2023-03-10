import React, { useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsVisible(() => scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-10 hidden h-16 w-16 animate-pulse items-center justify-center rounded-md border-4 border-light bg-light shadow-lg transition-colors duration-300  hover:animate-none hover:bg-slate-300 dark:border-gray dark:bg-gray dark:text-white dark:hover:bg-dark sm:flex"
        >
          <HiArrowUp className="h-10 w-10 font-bold" />
          {/* Back to Top */}
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
