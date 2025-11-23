import { Github } from "lucide-react";
import React from "react";

const ActionButton = () => {
  return (
    <div className="h-10 w-full mt-[100px] mb-5 gap-2 grid grid-cols-2">
      <button className="flex items-center justify-center gap-2 w-full hover:bg-linear-to-br hover:from-zinc-700 hover:to-zinc-800 rounded-lg hover:text-white hover:stroke-white transition-all">
        <Github className="h-4 w-4" />
        Github Repo
      </button>
      <button className="flex items-center justify-center gap-2 w-full hover:bg-red-100/50 rounded-lg text-red-500 font-medium transition-all">
        Log Out
      </button>
    </div>
  );
};

export default ActionButton;
