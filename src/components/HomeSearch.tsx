"use client";
import React, { useState } from "react";
import { BsSearch, BsMicFill, BsCamera } from "react-icons/bs";

const HomeSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="mt-6  ">
      <form className="sm:min-w-[30rem] md:min-w-[40rem] min-w-[90vw] mx-auto text-lg  flex border gap-3 rounded-full items-center py-1 px-3 sm:p-3  focus-within:shadow-lg hover:shadow-lg">
        <BsSearch className=" select-none opacity-40 text-sm" />
        <input
          autoFocus={true}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" focus:outline-none flex-grow"
        />
        {search && (
          <div className="pr-3 border-r-2 ">
            <span
              onClick={() => setSearch("")}
              className=" cursor-pointer select-none opacity-50 text-xl "
            >
              X
            </span>
          </div>
        )}
        <BsMicFill className=" cursor-pointer" />
        <BsCamera className=" cursor-pointer" />
      </form>
      <div className=" font-serif my-4  text-center  flex justify-center items-center gap-6">
        <button className=" bg-[#f8f9fa] hover:border-gray-200 border border-transparent py-2 px-4">
          Google Search
        </button>
        <button className=" bg-[#f8f9fa]  hover:border-gray-200 border  border-transparent  py-2 px-4">
          I&apos;m feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
