import React from "react";

import { SVGBackgrroundAnimation } from "../assets/SVGBackgrroundAnimation";
import { ButtonLink } from "./Button";
import Container from "./Container";

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[65vh] flex-col justify-center py-4  sm:min-h-[50vh] md:min-h-[60vh] xl:min-h-[80vh]   "
    >
      <Container className="flex flex-col sm:flex-row">
        <div>
          <span className="font-mono text-xs font-bold tracking-widest text-brand">
            FRONTEND DEVELOPER
          </span>
          <h1 className="mt-4 text-xl font-bold text-darkest duration-300 ease-in dark:text-light sm:tracking-tight lg:text-xxl">
            Hi👋, I'm <span className="text-brand">Tadesse</span>.
          </h1>
          <p className="text-gray-500 mt-4 max-w-5xl text-lg dark:text-slate-300 sm:text-xl">
            I build clean and accessible web apps.
          </p>
          <p className="mt-10 max-w-screen-sm text-md">
            I'm a frontend developer focused on building responsive, accessible,
            and user-friendly interfaces that provide a great user experience.
          </p>
          <div className="xs:flex-rows flex-cols mt-8 flex flex-wrap items-center gap-4 xs:gap-2">
            <ButtonLink href="#projects" size="medium" className="mr-4">
              View Projects
            </ButtonLink>
            <ButtonLink
              href="#contact"
              intent="outline"
              size="medium"
              className="mr-4 tracking-tighter"
            >
              Let's Talk
            </ButtonLink>
          </div>
        </div>
        <div className="hidden sm:block">
          <SVGBackgrroundAnimation className="" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
