import { Spinner } from "@nextui-org/react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-sm flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default LoadingSpinner;
