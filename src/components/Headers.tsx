import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const Headers = () => {
  return (
    <div className=" flex gap-4 items-center py-2 justify-end w-[95vw] mx-auto text-sm">
      <Link
        className="  hover:underline"
        href="https://mail.google.com"
        target="_blank"
      >
        Gmail
      </Link>
      <Link
        className="  hover:underline"
        href="https://image.google.com"
        target="_blank"
      >
        Images
      </Link>
      <div className=" p-3 rounded-full hover:bg-gray-200">
        <TbGridDots className=" text-xl text-gray-600" />
      </div>
      <div className=" cursor-pointer hover:bg-opacity-90 rounded bg-[#1a73e8] px-7 py-2 text-white">
        Sign In
      </div>
    </div>
  );
};

export default Headers;
