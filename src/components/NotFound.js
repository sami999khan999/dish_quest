import React from "react";
import { Link } from "react-router-dom";
import FryingPan from "./FryingPan";

const NotFound = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col items-center gap-12">
      <p className="text-2xl lg:text-4xl text-center font-semibold text-rose-300 leading-normal">
        Page not found
      </p>
      <Link
        to="/"
        className="bg-rose-500 text-rose-50 p-3 px-8 rounded-full uppercase shadow-lg shadow-rose-200 hover:bg-gray-600 hover:text-gray-50 hover:shadow-gray-300 duration-300"
      >
        Go to home
      </Link>
      <FryingPan />
    </div>
  );
};

export default NotFound;
