import React, { useRef, useState } from "react";
import MacTime from "./MacTime";
import { LIST_APPLE, LIST_FINDER } from "../Constants/ListSettings";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const AppleRef = useRef(null);
  const FinderRef = useRef(null);
  const [isApple, setIsApple] = useState(false);
  const [isFinder, setIsFinder] = useState(false);

  const navigate = useNavigate();
  useGSAP(() => {
    if (isApple) {
      gsap.from(AppleRef.current, {
        y: 10,
        duration: 0.5,
        ease: "expo.out",
      });
    }
    if (isFinder) {
      gsap.from(FinderRef.current, {
        y: 10,
        duration: 0.5,
        ease: "expo.out",
      });
    }
  }, [isApple, isFinder]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <nav className="fixed w-full h-8 bg-white/40 backdrop-blur-xs flex items-center justify-between px-3">
        {/* <img src="/github.png" alt="Github" className="h-[90%]" /> */}
        <ul className="flex gap-1 items-center px-2">
          <li
            onMouseEnter={() => setIsApple(true)}
            onMouseLeave={() => setIsApple(false)}
            className="relative py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm"
          >
            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path
                fill="currentColor"
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"
              ></path>
            </svg>

            {isApple && (
              <div
                ref={AppleRef}
                className="w-[200px] p-1 pb-1.5 bg-white/40 absolute backdrop-blur-xl left-0 rounded-md top-8.5"
              >
                <div className="w-full absolute -top-4 h-4"></div>
                <ul className="space-y-0.5">
                  {LIST_APPLE.map((item, index) => (
                    <React.Fragment key={index}>
                      {index === 9 ? (
                        <li
                          onClick={handleLogout}
                          className="text-zinc-900 text-sm font-medium rounded-sm px-1.5 py-0.5 hover:bg-[#e43232] hover:text-white"
                        >
                          {item.label}
                        </li>
                      ) : (
                        <li className="text-zinc-900 text-sm font-medium rounded-sm px-1.5 py-0.5 hover:bg-[#007bff] hover:text-white">
                          {item.label}
                        </li>
                      )}
                      {item.separator && (
                        <hr className="w-[95%] mx-auto border-zinc-700/50 rounded-full" />
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => setIsFinder(true)}
            onMouseLeave={() => setIsFinder(false)}
            className="py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm mx-1 font-semibold"
          >
            Finder
            {isFinder && (
              <div
                ref={FinderRef}
                className="w-[200px] p-1 pb-1.5 bg-white/40 absolute backdrop-blur-xl left-15 rounded-md top-8.5"
              >
                <div className="w-full absolute -top-4 h-4"></div>
                <ul className="space-y-0.5">
                  {LIST_FINDER.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="text-zinc-900 text-sm rounded-sm font-medium px-1.5 py-0.5 hover:bg-[#007bff] hover:text-white">
                        {item.label}
                      </li>
                      {item.separator && (
                        <hr className="w-[95%] mx-auto border-zinc-700/50 rounded-full" />
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm text-sm">
            File
          </li>
          <li className="py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm text-sm">
            Edit
          </li>
          <li className="py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm text-sm">
            View
          </li>
          <li className="py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm text-sm">
            Go
          </li>
          <li className="py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm text-sm">
            Window
          </li>
          <li className="py-0.5 px-2 hover:bg-black/10 cursor-default rounded-sm text-sm">
            Help
          </li>
        </ul>
        <div>
          <MacTime />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
