"use client";
import React from "react";
import { BsSearch, BsMicFill, BsCamera } from "react-icons/bs";

const HomeSearch = () => {
  return (
    <div className="mt-6 ">
      <form className="sm:min-w-[30rem] md:min-w-[40rem] min-w-[90vw] mx-auto text-lg  flex border gap-3 rounded-full items-center py-1 px-3 sm:p-3  focus-within:shadow-lg hover:shadow-lg">
        <BsSearch className=" select-none opacity-40 text-sm" />
        <input
          autoFocus={true}
          type="text"
          className=" focus:outline-none flex-grow"
        />
        <BsMicFill className=" cursor-pointer" />
        <BsCamera className=" cursor-pointer" />
      </form>
    </div>
  );
};

export default HomeSearch;
