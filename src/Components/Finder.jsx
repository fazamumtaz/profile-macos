import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Finder = ({ isOpen, onClose }) => {
  const finderRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      gsap.from(finderRef.current, {
        scale: 0,
        y: 400,
        opacity: 0,
        ease: "expo.out",
        duration: 0.5,
      });
    } else if (shouldRender) {
      gsap.to(finderRef.current, {
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
      ref={finderRef}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl h-[500px] w-[500px]"
    >
      <nav className="w-full h-[5vh] relative rounded-t-xl flex items-center justify-start gap-2 px-4 border-b-2 border-zinc-200">
        <button
          onClick={onClose}
          className="h-4 w-4 relative rounded-full bg-[#ff5f56] border border-[#e0443e]"
        ></button>
        <button
          onClick={onClose}
          className="h-4 w-4 rounded-full relative bg-[#ffbd2e] border border-[#dea123]"
        ></button>
        <button
          onClick={onClose}
          className="h-4 w-4 rounded-full relative bg-[#27c93f] border border-[#1aab29]"
        ></button>
        <h1 className="abs-center font-georama text-sm font-medium text-zinc-600">
          Settings
        </h1>
      </nav>
    </div>
  );
};

export default Finder;
