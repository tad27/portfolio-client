import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="-z-[1] flex h-[4rem] flex-col justify-center border-t-2 border-slate-200  bg-slate-100 py-4 text-center text-xs opacity-75 dark:border-dark dark:bg-darkest dark:opacity-50 md:text-sm">
      <Container className="flex flex-col items-center justify-center  border-dark dark:border-x md:flex-row">
        <span className="font-bold md:mr-2">Tadesse Akele</span> &copy;{" "}
        {new Date().getFullYear()} All Rights Reserved.
      </Container>
    </footer>
  );
}

export default Footer;
