import React, { useEffect, useRef, useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import gsap from "gsap";

const Settings = ({ isOpen, onClose, onX }) => {
  const SettingsRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      gsap.from(SettingsRef.current, {
        scale: 0,
        y: 400,
        opacity: 0,
        ease: "expo.out",
        duration: 0.5,
      });
    } else if (shouldRender) {
      gsap.to(SettingsRef.current, {
        scale: 0,
        y: 400,
        opacity: 0,
        ease: "expo.in",
        duration: 0.3,
        onComplete: () => setShouldRender(false),
      });
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      ref={SettingsRef}
      className="w-3xl absolute flex top-20 left-20 rounded-xl shadow-2xl h-[55vh]"
    >
      <LeftSide onClose={onClose} onX={onX} />
      <RightSide />
    </div>
  );
};

export default Settings;
