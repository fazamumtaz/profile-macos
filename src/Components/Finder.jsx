import gsap from "gsap";
import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LIST_FILES_1, LIST_FILES_2 } from "../Constants/ListSettings";

const Finder = ({ isOpen, onClose, onOpenProfile }) => {
  const finderRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

  // ✅ Handle double click on PDF file
  const handleDoubleClick = () => {
    onOpenProfile(); // Call the function passed from App
    // Optional: close Finder when opening Profile
    // onClose();
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={finderRef}
      className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl h-[500px] w-2xl flex pt-[5vh]"
    >
      <nav className="w-full top-0 left-0 h-[5vh] bg-white absolute rounded-t-xl flex items-center justify-start gap-2 px-4 border-b-2 border-zinc-200">
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
          Finder
        </h1>
      </nav>

      {/* left */}
      <div className="w-1/3 bg-white/80 backdrop-blur-3xl px-1 shadow-xl py-3 rounded-bl-xl">
        <h1 className="font-semibold mb-3 text-zinc-700 ml-2">My Files</h1>
        <div className="flex flex-col gap-1">
          {LIST_FILES_1.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className={`flex items-center space-x-1 px-2 py-0.5 rounded-sm  group transition-colors ${
                  index === 0 ? "bg-[#007bff]" : "hover:bg-black/30"
                }`}
                key={item.label}
              >
                <Icon
                  className={`w-4 h-4  group-hover:stroke-white ${
                    index === 0 ? "stroke-white" : "stroke-zinc-700"
                  }`}
                />
                <p
                  className={`text-sm font-medium  group-hover:text-white ${
                    index === 0 ? "text-white" : "text-zinc-700"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <h4 className="font-medium text-zinc-700 text-sm mb-1 ml-1">
            Favorites
          </h4>
          {LIST_FILES_2.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="flex items-center space-x-1 px-2 py-0.5 rounded-sm hover:bg-black/30 group transition-colors"
                key={item.label}
              >
                <Icon className="w-4 h-4 stroke-zinc-700 group-hover:stroke-white" />
                <p className="text-sm font-medium text-zinc-700 group-hover:text-white">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* right */}
      <div className="w-2/3 bg-white rounded-br-xl relative">
        <nav className="h-10 w-[95%] flex items-center mx-auto border-b border-zinc-200 shadow-2xs">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="text-md font-medium">Recents</span>
        </nav>

        {/* ✅ PDF File with double click handler */}
        <div
          onClick={() => setIsActive(!isActive)}
          onDoubleClick={handleDoubleClick} // Double click opens Profile
          className={`aspect-9/16 flex left-10 top-20 items-center justify-center flex-col w-20 p-1 h-32 rounded-xs absolute scale-120 transition-all hover:bg-black/5 cursor-pointer ${
            isActive && "bg-black/5"
          }`}
        >
          <img src="/paper.png" className="no-drag" alt="paper-profile" />
          <p
            className={`text-[10px] select-none font-medium ${
              isActive
                ? "text-white bg-[#007bff] px-0.5 rounded-xs"
                : "text-zinc-700"
            }`}
          >
            My Profile.pdf
          </p>
          <p className="text-zinc-500 select-none text-[7px]">
            05/10/25, 12.01AM
          </p>
          <p className="text-zinc-500 select-none text-[7px]">500KB</p>
        </div>
      </div>
    </div>
  );
};

export default Finder;
