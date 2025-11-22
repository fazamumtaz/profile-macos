import React from "react";
import { LIST_INTERNET, LIST_NOTIFICATION } from "../../Constants/ListSettings";
import { Mic, Search } from "lucide-react";

const LeftSide = ({ onClose, onX }) => {
  return (
    <div className="w-1/3 h-full pb-5 rounded-l-xl bg-white/70 backdrop-blur-md overflow-y-auto">
      <nav className="w-full h-[5vh] relative rounded-t-xl flex items-center justify-start gap-2 px-5 py-6">
        <button
          onClick={onClose}
          className="h-4 w-4 relative rounded-full bg-[#ff5f56] border border-[#e0443e]"
        ></button>
        <button className="h-4 w-4 rounded-full relative bg-[#ffbd2e] border border-[#dea123]"></button>
        <button className="h-4 w-4 rounded-full relative bg-[#27c93f] border border-[#1aab29]"></button>
      </nav>
      <div className="space-y-2">
        {/* search bar */}
        <div className="relative mx-auto w-[90%]">
          <input
            type="text"
            className="bg-black/10 rounded-lg focus:outline-none placeholder:text-sm text-sm flex items-center px-8 py-1 w-full text-zinc-700 h-8"
            placeholder="Search"
          />
          <Search className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 left-2" />
          <Mic className="absolute stroke-zinc-700 top-1/2 -translate-y-1/2 h-4 w-4 right-2" />
        </div>
        {/* iCloud */}
        <div className="px-3 py-2 w-[90%] mx-auto bg-linear-to-tl from-blue-400 to-blue-500 rounded-lg flex items-center gap-3 hover:cursor-default mb-4">
          <img
            src="/profile.png"
            className="profile rounded-full aspect-square w-11 h-11"
            alt=""
          />
          <div className="flex flex-col items-start">
            <h1 className="text-lg text-white tracking-wide -mt-1">
              Badzlan Nur
            </h1>
            <p className="text-xs font-light text-white">Apple ID</p>
          </div>
        </div>
        <div className="border-b-2 w-[90%] mx-auto border-black/20 rounded-full"></div>
        {/* Internet */}
        <div className="w-[90%] mx-auto flex flex-col space-y-1 mb-5">
          {LIST_INTERNET.map((list) => (
            <button className="w-full hover:bg-white/30 transition-all p-1 rounded-md flex items-center space-x-2">
              <img src={`/${list.img}.png`} className="h-5 w-5" alt="" />
              <p className="text-sm">{list.label}</p>
            </button>
          ))}
        </div>
        {/* Notification */}
        <div className="w-[90%] mx-auto flex flex-col space-y-1">
          {LIST_NOTIFICATION.map((list) => (
            <button className="w-full hover:bg-white/30 transition-all p-1 rounded-md flex items-center space-x-2">
              <img src={`/${list.img}.png`} className="h-5 w-5" alt="" />
              <p className="text-sm">{list.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
