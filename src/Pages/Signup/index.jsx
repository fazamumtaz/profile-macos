import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CaseLower,
  CaseUpper,
  ChevronLeft,
  ChevronRight,
  Flag,
  Github,
  Lock,
  LockOpen,
  RectangleEllipsis,
  TreePalm,
  UserLock,
} from "lucide-react";
import React, { useState } from "react";

function SignUp() {
  const [isPassword, setIsPassword] = useState(true);
  const [registrationSection, setRegistrationSection] = useState(1);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    job: "",
    city: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // baru call api
  };
  return (
    <main id="login" className="w-full h-screen relative">
      <div className="w-full h-full absolute backdrop-blur-sm bg-black/20 justify-center items-center"></div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-2">
        <a
          href="/signup"
          className="flex flex-col justify-center rounded-lg items-center p-5 px-7 space-y-2 hover:bg-white/20 hover:backdrop-blur-md group transition-colors"
        >
          <RectangleEllipsis className="stroke-zinc-200 group-hover:stroke-[#1c1d1e]" />
          <h1 className="text-zinc-200 shadow-[1000px] group-hover:text-[#1c1d1e]">
            SignUp
          </h1>
        </a>
        <a
          href="https://www.github.com"
          className="flex flex-col justify-center rounded-lg items-center p-5 px-7 space-y-2 hover:bg-white/20 hover:backdrop-blur-md group transition-colors"
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
        <form onSubmit={handleSubmit} className="flex flex-col relative">
          {registrationSection === 1 ? (
            <>
              <div className="relative scale-75">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 pl-10 py-2 text-zinc-300"
                />

                <CaseUpper
                  className="absolute top-1/2 -translate-y-1/2 left-2 stroke-zinc-300"
                  strokeWidth={1.5}
                />
              </div>
              <div className="relative scale-75">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 pl-10 py-2 text-zinc-300"
                />

                <CaseLower
                  className="absolute top-1/2 -translate-y-1/2 left-2 stroke-zinc-300"
                  strokeWidth={1.5}
                />
              </div>
              <div className="relative scale-75">
                <input
                  type={isPassword ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 pl-10 py-2 text-zinc-300"
                />
                <UserLock
                  className="absolute w-5 h-5 top-1/2 -translate-y-1/2 left-2.5 stroke-zinc-300"
                  strokeWidth={1.5}
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
                <div
                  onClick={() => setRegistrationSection(2)}
                  className="p-2.5 rounded-full bg-white/20 backdrop-blur-lg absolute -right-12 bottom-0.5 hover:bg-zinc-200/40"
                >
                  <ChevronRight className="w-4 h-4 stroke-zinc-300" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="relative scale-75">
                <input
                  type="text"
                  name="job"
                  placeholder="Your Job"
                  value={formData.job}
                  onChange={handleInputChange}
                  className="focus:outline-zinc-300/50 focus:outline-2 bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 pl-10 py-2 text-zinc-300"
                />

                <Briefcase
                  className="absolute top-1/2 -translate-y-1/2 left-2.5 stroke-zinc-300 w-5 h-5"
                  strokeWidth={1.5}
                />
              </div>
              <div className="relative scale-75">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 pl-10 py-2 text-zinc-300"
                />

                <TreePalm
                  className="absolute top-1/2 -translate-y-1/2 left-2 stroke-zinc-300"
                  strokeWidth={1.5}
                />
              </div>
              <div className="relative scale-75">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 pl-10 py-2 text-zinc-300"
                />
                <Flag
                  className="absolute w-5 h-5 top-1/2 -translate-y-1/2 left-2.5 stroke-zinc-300"
                  strokeWidth={1.5}
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-full bg-white/20 backdrop-blur-lg absolute -right-12 bottom-0.5 hover:bg-zinc-200/40"
                >
                  <ArrowRight className="w-4 h-4 stroke-zinc-300" />
                </button>
                <button
                  onClick={() => setRegistrationSection(1)}
                  className="p-2.5 rounded-full bg-white/20 backdrop-blur-lg absolute bottom-0.5 hover:bg-zinc-200/40 -left-12"
                >
                  <ChevronLeft className="w-4 h-4 stroke-zinc-300" />
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </main>
  );
}

export default SignUp;
