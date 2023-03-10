import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

import { urlFor } from "../../client";

function ProjectCard({ project }) {
  const {
    banner,
    title,
    description,
    alttext,
    technologies,
    liveWebsiteLink,
    githubLink,
  } = project;
  return (
    <div className="ease group flex flex-col overflow-hidden rounded-md border border-light/50 bg-lightest transition-transform duration-500 hover:-translate-y-2 dark:border-none dark:bg-dark dark:ring dark:ring-dark/25">
      <div className="relative">
        {!banner ? (
          <h4>Loading</h4>
        ) : (
          <img
            className="md:hs-96 z-10 w-full object-cover"
            src={urlFor(banner)}
            alt={alttext}
          />
        )}
        <div className="absolute bottom-0 z-10 h-1/2 w-full translate-y-1 bg-gradient-to-t from-lightest to-transparent dark:from-dark"></div>
      </div>
      <div className="flex h-full flex-grow flex-col p-4 xs:p-12">
        <div className="mb-6 flex flex-col justify-between xs:flex-row xs:items-end">
          <p
            // href="#"
            className="focus #hover:!text-brand #cursor-pointer font-mono font-bold text-darkest transition-colors dark:text-light xs:text-lg"
          >
            {title}
          </p>
          <div className="flex items-center gap-2 xs:justify-end">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="focus flex gap-2 p-2 hover:text-brand"
              >
                <span className="sr-only">Gitub Repository</span>
                <FaGithub title="Source code" className="h-9 w-9" />
              </a>
            )}
            {liveWebsiteLink && (
              <a
                href={liveWebsiteLink}
                target="_blank"
                className="focus p-2 hover:text-brand"
              >
                <span className="sr-only">Live Preview</span>
                <HiOutlineExternalLink
                  title="Live Preview"
                  className="h-11 w-11"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-mds hidden flex-grow xs:block">{description}</p>
        <div className="mt-6 hidden flex-wrap gap-2 xs:flex">
          {technologies?.map((singleTech) => (
            <small
              className="inline-flex rounded-md border border-mid/5 bg-darkest/5 px-4 py-2 font-mono text-xs dark:bg-darkest/50"
              key={singleTech}
            >
              {singleTech}
            </small>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
