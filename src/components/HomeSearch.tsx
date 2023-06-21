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
      <div className=" text-center flex justify-center items-center gap-6">
        <button className="bg-red-9200 hover:ring-5 hover:ring-yellow-600 p-4">
          Google Search
        </button>
        <button>I&apos;m feeling Lucky</button>
      </div>
    </div>
  );
};

export default HomeSearch;
