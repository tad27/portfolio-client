import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { useProject } from "../contexts/ProjectContext";

function Preloader() {
  const { isLoading } = useProject();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-lightest dark:bg-darkest">
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#7148FC"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
}

export default Preloader;
