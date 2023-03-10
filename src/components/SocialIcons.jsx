import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import classNames from "classnames";

import { useProject } from "../contexts/ProjectContext";

function SocialIcons() {
  const { ResumeLink } = useProject();

  const platforms = [
    // {
    //   id: 1,
    //   name: "Linked In",
    //   color: "hover:bg-linkedin hover:dark:bg-linkedin",
    //   icon: <FaLinkedin size={30} />,
    //   href: "#",
    // },
    {
      id: 2,
      name: "Github",
      color: "hover:bg-github hover:dark:bg-github",
      icon: <FaGithub size={30} />,
      href: "https://github.com/tad27",
    },
    {
      id: 3,
      name: "Email",
      color: "hover:bg-gmail hover:dark:bg-gmail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:tadesseakele27@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      color: "hover:bg-teal-600 hover:dark:bg-teal-600",
      icon: <FaDownload size={30} />,
      href: ResumeLink,
    },
  ];

  return (
    <ul className="fixed top-[40%] left-0 z-20 hidden lg:block">
      {platforms?.map((item) => (
        <Platform key={item?.id} platform={item} />
      ))}
    </ul>
  );
}

const Platform = ({ platform: { name, icon, href, color } }) => (
  <li
    className={classNames(
      "ml-[-110px] flex h-[60px] w-[160px] items-center border-b border-r border-lightest bg-light text-dark duration-300 hover:ml-0 hover:text-light dark:border-darkest dark:bg-dark dark:text-light",
      color
    )}
  >
    <a
      href={href}
      target="_blank"
      className="flex h-full w-full items-center justify-between px-4 text-lg"
    >
      <span>{name}</span>
      {icon}
    </a>
  </li>
);
export default SocialIcons;
