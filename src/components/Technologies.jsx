import React from "react";
import { MdDesignServices } from "react-icons/md";
import {
  SiAdobephotoshop,
  SiCanva,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { TbCodeDots, TbGitBranch } from "react-icons/tb";

import SectionLayout from "./SectionLayout";

function Technologies() {
  return (
    <section id="tech" className="py-20">
      <SectionLayout title="Technologies">
        <p className="max-w-5xl text-md">
          In my work as a frontend developer, I have been using a variety of
          technologies to create responsive and user-friendly websites.{" "}
          <span className="mt-4 hidden md:block">
            Some of the technologies I'm proficient in include React, Tailwind
            CSS, Sass, Firebase, Sanity, and WordPress. I'm also familiar with
            tools like Git, Github, Notion, NPM, and Figma, and I have a strong
            understanding of SEO best practices.
          </span>
        </p>
        <div className="mt-10 grid gap-12 xs:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold dark:text-light">
              <TbCodeDots className="" size={30} />
              Development
            </h4>
            <hr className="w-1/3 border-slate-200 dark:border-slate-800" />
            <ul className="flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <SiReact size={20} /> React JS
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss size={20} /> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <SiNodedotjs size={20} /> Node JS
              </li>
              <li className="flex items-center gap-2">
                <SiFirebase size={20} /> Firebase
              </li>
              <li className="flex items-center gap-2">
                <SiSass size={20} /> Sass
              </li>
              <li className="flex items-center gap-2">
                <SiMysql size={20} /> MySQL
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold dark:text-light">
              <MdDesignServices className="" size={30} />
              Design
            </h4>
            <hr className="w-1/3 border-slate-200 dark:border-slate-800" />
            <ul className="flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <SiFigma size={20} /> Figma
              </li>
              <li className="flex items-center gap-2">
                <SiAdobephotoshop size={20} /> Photoshop
              </li>
              <li className="flex items-center gap-2">
                <SiCanva size={20} /> Canva
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold dark:text-light">
              <TbGitBranch size={30} />
              Others
            </h4>
            <hr className="w-1/3 border-slate-200 dark:border-slate-800" />
            <ul className="flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <SiGit size={20} /> Git
              </li>
              <li className="flex items-center gap-2">
                <SiGithub size={20} /> GitHub
              </li>
              <li className="flex items-center gap-2">
                <SiNpm size={20} /> NPM
              </li>
              <li className="flex items-center gap-2">
                <SiWordpress size={20} /> WordPress
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}

export default Technologies;
