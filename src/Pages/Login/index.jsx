import {
  ArrowRight,
  Github,
  Lock,
  LockOpen,
  RectangleEllipsis,
} from "lucide-react";
import React, { useState } from "react";
import { apiRequest } from "../../Utils/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isPassword, setIsPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    setIsLoading(true);

    try {
      const res = await apiRequest("/login", {
        method: "POST",
        body: formData,
      });

      if (res && res.token) {
        localStorage.setItem("token", res.token);
      }

      console.log("login berhasil");
      Navigate("/");
    } catch (error) {
      alert(error.message || "Login gagal, coba lagi!");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
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
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
            className="focus:outline-none bg-white/20 backdrop-blur-lg rounded-lg placeholder:text-zinc-300 px-3 py-2 text-zinc-300 scale-75"
          />
          <div className="relative scale-75">
            <input
              type={isPassword ? "password" : "text"}
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
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
            <button
              type="submit"
              className="p-2.5 rounded-full bg-white/20 backdrop-blur-lg absolute -right-12 bottom-0.5 hover:bg-zinc-200/40"
            >
              <ArrowRight className="w-4 h-4 stroke-zinc-300" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
