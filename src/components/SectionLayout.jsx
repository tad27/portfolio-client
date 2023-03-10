import React from "react";
import { HiHashtag } from "react-icons/hi";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

import Container from "./Container";

function SectionLayout({ children, title }) {
  return (
    <Container className="">
      <h2 className="mb-4 flex items-center text-lg font-bold dark:text-mid sm:text-xl">
        <HiHashtag className="text-brand" />
        <span className="">{title}</span>
        <RiCheckboxBlankCircleFill className="flex h-4 w-4 self-end text-brand" />
      </h2>
      <hr className="mb-4 border-slate-200 dark:border-slate-800" />
      {children}
    </Container>
  );
}

export default SectionLayout;
