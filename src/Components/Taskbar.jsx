import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Taskbar = ({ isFiles, setFiles, isSettings, setSettings }) => {
  const [isSettingsTooltip, setSettingsTooltip] = useState(false);
  const [isFinderTooltip, setFinderTooltip] = useState(false);

  useGSAP(() => {
    if (isSettingsTooltip) {
      gsap.from(".tooltip-settings", {
        opacity: 0,
        scale: 0.5,
        y: 20,
        duration: 0.15,
      });
    }
    if (isFinderTooltip) {
      gsap.from(".tooltip-finder", {
        opacity: 0,
        scale: 0.5,
        y: 20,
        duration: 0.15,
      });
    }
  }, [isFinderTooltip, isSettingsTooltip]);

  return (
    <nav className="absolute flex left-1/2 -translate-x-1/2 h-20 p-1.5 bg-white/25 backdrop-blur-md rounded-2xl bottom-3">
      <ul className="flex gap-1">
        {/* SETTINGS */}
        <li
          onMouseEnter={() => setSettingsTooltip(true)}
          onMouseLeave={() => setSettingsTooltip(false)}
          onClick={() => setSettings(!isSettings)}
          className="hover:bg-white/10 rounded-xl relative cursor-default"
        >
          <img src="/settings.png" className="w-full h-full" alt="" />
          {isSettingsTooltip && (
            <div className="tooltip-settings absolute px-3 py-1.5 bg-white/50 rounded-lg bottom-20 -left-1.5">
              <p>Settings</p>
            </div>
          )}
        </li>

        {/* FINDER */}
        <li
          onMouseEnter={() => setFinderTooltip(true)}
          onMouseLeave={() => setFinderTooltip(false)}
          onClick={() => setFiles(!isFiles)}
          className="hover:bg-white/10 rounded-xl relative cursor-default"
        >
          <img src="/file.png" className="w-full h-full" alt="" />
          {isFinderTooltip && (
            <div className="tooltip-finder absolute px-3 py-1.5 bg-white/50 rounded-lg bottom-20 left-3">
              <p>File</p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Taskbar;
