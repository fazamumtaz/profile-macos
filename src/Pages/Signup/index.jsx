import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ArrowRight,
  Github,
  Lock,
  LockOpen,
  RectangleEllipsis,
} from "lucide-react";
import React, { useRef, useState } from "react";

function SignUp() {
  const bRef = useRef(null);
  const bRef2 = useRef(null);
  const [isPassword, setIsPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    // gsap.from(".bottom1", {
    //   y: 40,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power1.out",
    //   stagger: 0.4,
    // });
  });

  if (isLoading) {
    return setTimeout(() => {
      <main className="h-screen w-full">halo</main>;
    }, 5000);
    setIsLoading(false);
  }

  return (
    <main id="login" className="w-full h-screen relative">
      <div className="w-full h-full absolute backdrop-blur-sm bg-black/20 justify-center items-center"></div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-2">
        <a
          ref={bRef}
          href="/signup"
          className="bottom1 flex flex-col justify-center rounded-lg items-center p-5 px-7 space-y-2 hover:bg-white/20 hover:backdrop-blur-md group transition-colors"
        >
          <RectangleEllipsis className="stroke-zinc-200 group-hover:stroke-[#1c1d1e]" />
          <h1 className="text-zinc-200 shadow-[1000px] group-hover:text-[#1c1d1e]">
            SignUp
          </h1>
        </a>
        <a
          ref={bRef2}
          href="https://www.github.com"
          className="bottom1 flex flex-col justify-center rounded-lg items-center p-5 px-7 space-y-2 hover:bg-white/20 hover:backdrop-blur-md group transition-colors"
        >
          <Github className="stroke-zinc-200 group-hover:stroke-[#1c1d1e]" />
          <h1 className="text-zinc-200 shadow-[1000px] group-hover:text-[#1c1d1e]">
            Github Repo
          </h1>
        </a>
      </div>

      <div className="w-30 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[80%] flex flex-col items-center">
        <img
          src="/macbook.png"
          className="no-drag drop-shadow-lg drop-shadow-white/50"
          alt="macbook"
        />
        <h1 className="font-semibold text-lg text-white -mt-2 mb-3">
          Hello There!
        </h1>
        <form className="flex flex-col relative">
          <input
            type="text"
            placeholder="username"
            className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 py-2 text-zinc-300 scale-75"
          />
          <div className="relative scale-75">
            <input
              type={isPassword ? "password" : "text"}
              placeholder="password"
              className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 py-2 text-zinc-300"
            />
            <div
              onClick={() => setIsPassword(!isPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-1 hover:bg-zinc-200/20 rounded-md p-2"
            >
              {isPassword ? (
                <Lock className="w-4 h-4 stroke-zinc-300" />
              ) : (
                <LockOpen className="w-4 h-4 stroke-zinc-300" />
              )}
            </div>
            <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-lg absolute -right-12 bottom-0.5 hover:bg-zinc-200/40">
              <ArrowRight className="w-4 h-4 stroke-zinc-300" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
