import React, { useEffect, useState } from "react";
import { HiOutlineMail, HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import classNames from "classnames";

import { useWindowSize } from "../hooks/useWindowSize";
import { useProject } from "../contexts/ProjectContext";
import { ButtonLink } from "./Button";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";

const links = [
  { label: "Home", path: "#" },
  { label: "Work", path: "#projects" },
  // { label: "About", path: "#about" },
  { label: "Tech", path: "#tech" },
  { label: "Contact", path: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth] = useWindowSize();
  const { ResumeLink } = useProject();

  useEffect(() => {
    if (windowWidth > 768) setMenuOpen(false);
  }, [windowWidth]);

  return (
    <header className="sticky top-0 z-40 flex w-full flex-col justify-center bg-lightgray bg-gradient-to-b dark:from-darkest dark:to-darkest/5 md:h-navHeight lg:py-0 ">
      <Container className="flex h-navHeight items-center gap-8" isWide={true}>
        <div className="flex flex-grow items-center justify-between md:flex-grow-0">
          <a
            href="#"
            className="flex flex-nowrap items-center font-sans text-lg dark:text-light"
          >
            <MdDesignServices
              className="mr-2 -rotate-45 text-brand"
              size={20}
            />
            tadesse{" "}
            <span className="font-bold text-brand opacity-75 dark:text-mid">
              .dev
            </span>
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle className="md:hidden" />
            <button onClick={() => setMenuOpen(true)} className="md:hidden">
              <span className="sr-only">Menu Toggle</span>
              <HiOutlineMenuAlt3 className="h-10 w-10 transition-colors dark:stroke-mid dark:hover:stroke-lightest" />
            </button>
          </div>
        </div>
        <nav className="hidden justify-end font-mono md:-block md:flex md:flex-grow">
          <ul className="flex h-full items-center">
            {links.map((link) => (
              <li key={link.label} className="ml-6">
                <a
                  href={link.path}
                  className="focus text-[18px] font-medium text-dark/75 transition-all hover:text-brand hover:underline hover:underline-offset-8 dark:text-mid dark:hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden flex-col items-center gap-6 md:flex md:flex-row">
          <ThemeToggle />
          <ButtonLink
            href={ResumeLink}
            target="_blank"
            size="small"
            className="mr-4"
          >
            Resume
          </ButtonLink>
        </div>
      </Container>

      {/* Mobile Nav */}
      <nav
        className={classNames(
          "md:hidden",
          menuOpen
            ? "fixed inset-0 right-0 !z-[100] h-full w-full bg-black/50 backdrop-blur"
            : "-right-[100%]"
        )}
      >
        <div
          id="mobile-nav"
          className={classNames(
            "fixed top-0 bottom-0 z-[101] h-screen w-5/6 bg-lightgray duration-500 ease-in dark:bg-darkest sm:w-2/3",
            menuOpen ? "right-0 " : "-right-[100%]"
          )}
        >
          <div className="flex h-navHeight flex-grow items-center justify-between p-6 sm:flex-grow-0">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="focus flex flex-nowrap font-sans text-lg text-brand dark:text-light"
            >
              tadesse{" "}
              <span className="font-bold text-dark opacity-75 dark:text-mid">
                akele
              </span>
            </a>
            <button onClick={() => setMenuOpen(false)} className="focus">
              <span className="sr-only">Close Menu Toggle</span>
              <HiOutlineX className="h-10 w-10 stroke-dark/75 font-bold transition-colors hover:stroke-darkest dark:stroke-mid dark:hover:stroke-lightest" />
            </button>
          </div>

          <ul className=" flex flex-col items-center border-y border-mid/25 py-10 dark:border-black/10">
            {links.map((link) => (
              <li
                key={link.label}
                className="group w-full cursor-pointer hover:bg-gray/5"
                onClick={() => setMenuOpen(false)}
              >
                <a
                  className="focus block w-full p-6 font-mono text-lg font-bold tracking-wider text-dark/75 group-hover:text-brand dark:text-mid"
                  href={link.path}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-4 p-6">
            <ButtonLink
              href={ResumeLink}
              target="_blank"
              size="small"
              className="ring-0"
            >
              Download Resume
            </ButtonLink>
            <span className="font-bold text-mid">OR</span>
            <span className="mt-4 text-[1.4rem] font-bold text-brand">
              Let's talk
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/tad27"
                target="_blank"
                className="focus rounded-md bg-dark/75 p-2 text-mid transition-opacity hover:bg-dark/50 dark:bg-darkest/25 dark:hover:bg-darkest/50"
              >
                <FaGithub title="GitHub" className="h-8 w-8" />
              </a>
              <a
                href="mailto:tadesseakele27@gmail.com"
                className="focus rounded-md bg-dark/75 p-2 text-mid transition-opacity hover:bg-dark/50 dark:bg-darkest/25 dark:hover:bg-darkest/50"
              >
                <HiOutlineMail title="Email" className="h-8 w-8" />
              </a>
              {/* <a
                href="#"
                className="focus rounded-md bg-dark/75 p-2 text-mid transition-opacity hover:bg-dark/50 dark:bg-darkest/25 dark:hover:bg-darkest/50"
              >
                <FaLinkedinIn title="Linked In" className="h-8 w-8" />
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
