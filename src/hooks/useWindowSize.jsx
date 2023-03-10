import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth]);

  const handleResize = () => {
    setSize([window.innerWidth]);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
