import React from "react";
import classNames from "classnames";

function Container({ children, className, isWide = false }) {
  return (
    <div
      className={classNames(
        "mx-auto w-full px-8",
        className,
        isWide ? "max-w-[1200px]" : "max-w-[1000px]"
      )}
    >
      {children}
    </div>
  );
}

export default Container;
