import React from "react";
import classNames from "classnames";

function ScrollDown({ className }) {
  return (
    <div className={classNames("scroll-down", className)}>
      <span className="my-3 mx-auto flex h-[60px] w-10 rounded-full border-[3px] border-dark/75 dark:border-mid">
        <span className="mouse-scroll m-auto block h-5 w-5 rounded-full bg-dark dark:bg-brand"></span>
      </span>
      <span className="sr-only">Scroll Down</span>
    </div>
  );
}

export default ScrollDown;
