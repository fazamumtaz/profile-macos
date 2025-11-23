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
  Check,
} from "lucide-react";
import ProfileForm from "./ProfileForm";
import ActionButton from "./ActionButton";

const RightSide = () => {
  return (
    <div className="w-2/3 rounded-r-xl bg-white p-5 pb-10 relative overflow-y-auto macos-scrollbar">
      <div className="absolute flex space-x-1">
        <ChevronLeft />
        <h2 className="text-md font-medium">User Settings</h2>
      </div>

      <div className="w-full h-full pt-5">
        <ProfileForm />
        {/* Action Option */}
        <ActionButton />
        <div className="h-1 w-full"></div>
      </div>
    </div>
  );
};

export default RightSide;
