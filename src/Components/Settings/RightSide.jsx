import React from "react";
import {
  Briefcase,
  CaseSensitive,
  ChevronLeft,
  Facebook,
  Flag,
  Github,
  Instagram,
  TreePalm,
  Twitter,
} from "lucide-react";

const RightSide = () => {
  return (
    <div className="w-2/3 rounded-r-xl bg-white p-5 pb-10 relative overflow-y-auto macos-scrollbar">
      <div className="absolute flex space-x-1">
        <ChevronLeft />
        <h2 className="text-md font-medium">User Settings</h2>
      </div>
      <div className="w-full h-full pt-5">
        {/* image */}
        <div className="w-full text-center">
          <img
            src="/profile.png"
            className="rounded-full aspect-square h-20 w-20 mx-auto mb-2"
            alt=""
          />
          <p className="">Photo Profile</p>
        </div>

        {/* grid form */}
        <h1 className="font-medium my-3">Edit Profile</h1>
        {/* FullName */}
        <div className="grid grid-cols-2 gap-2">
          <div className="relative">
            <input
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
              placeholder="Badzlan Nur"
            />
            <CaseSensitive className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
          </div>
          {/* Job */}
          <div className="relative">
            <input
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
              placeholder="Backend End"
            />
            <Briefcase className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
          </div>
          {/* Country */}
          <div className="relative">
            <input
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
              placeholder="Indonesia"
            />
            <Flag className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
          </div>
          {/* City */}
          <div className="relative">
            <input
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
              placeholder="Jakarta"
            />
            <TreePalm className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
          </div>
          {/* about */}
          <div className="relative col-span-2">
            <textarea
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 min-h-20"
              placeholder="Jakarta"
            />
            <TreePalm className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
          </div>
        </div>

        {/* Social Media */}
        <h1 className="font-medium my-3 mt-5">Edit Social Media</h1>
        <div className="grid grid-cols-3 gap-2">
          <div className="relative">
            <input
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
              placeholder="Jakarta"
            />
            <Instagram className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
          </div>
          <div className="relative">
            <input
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
              placeholder="Jakarta"
            />
            <Facebook className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
          </div>
          <div className="relative">
            <input
              type="text"
              className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
              placeholder="Jakarta"
            />
            <Twitter className="absolute stroke-zinc-700 top-2 h-4 w-4 left-2" />
          </div>
        </div>

        {/* Additional Option */}
        <div className="h-10 w-full mt-[100px] mb-5 gap-2 grid grid-cols-2">
          <button className="flex items-center justify-center gap-2 w-full hover:bg-linear-to-br hover:from-zinc-700 hover:to-zinc-800 rounded-lg hover:text-white hover:stroke-white transition-all">
            <Github className="h-4 w-4" />
            Github Repo
          </button>
          <button className="flex items-center justify-center gap-2 w-full hover:bg-red-100/50 rounded-lg text-red-500 font-medium transition-all">
            Log Out
          </button>
        </div>
        <div className="h-1 w-full"></div>
      </div>
    </div>
  );
};

export default RightSide;
