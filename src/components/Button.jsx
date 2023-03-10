import React from "react";
import { cva } from "class-variance-authority";

const button = cva(
  "focus text-center button rounded-full gap-2 inline-flex items-center transition-all hover:shadow-lg font-mono ring-2 tracking-tighter",
  {
    variants: {
      intent: {
        primary: [
          "focus:text-lightest from-brand to-indigo-800 hover:from-brand  bg-gradient-to-r hover:to-purple-600 hover:shadow-brand/25 text-lightest",
        ],
        secondary: [
          "bg-dark/75 focus:text-mid hover:bg-dark dark:text-mid text-lightest focus:bg-dark ring-dark",
        ],
        outline: [
          "bg-transparent hover:underline ring-mid/25 hover:ring-mid/50",
        ],
      },
      size: {
        small: ["h-[42px] text-sm px-8 py-4 "],
        medium: ["sm:h-[56px] sm:py-8 sm:px-8 sm:text-md text-xs px-6 py-3"],
      },
    },
    fullWidth: {
      true: "w-full",
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

const Button = ({ className, intent, fullWidth, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);

export const ButtonLink = ({
  className,
  intent,
  fullWidth,
  size,
  href = "#",
  ...props
}) => (
  <a href={href} className={button({ intent, size, className })} {...props} />
);

export default Button;
