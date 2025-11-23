import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Download, MapPin } from "lucide-react";
import { apiRequest } from "../Utils/api";

const Profile = () => {
  const ProfileRef = useRef(null);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await apiRequest("/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = res.data;
        setUserData(user);
        console.log(user);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);
  return (
    <div
      ref={ProfileRef}
      className="w-md hidden bg-white pt-[7vh] abs-center rounded-xl shadow-2xl p-5"
    >
      <nav className="w-full h-[5vh] absolute left-0 top-0 rounded-t-xl flex items-center justify-between px-5 py-7 border-b border-gray-300">
        <div className="flex gap-1.5">
          <button className="h-4 w-4 relative rounded-full bg-[#ff5f56] border border-[#e0443e]"></button>
          <button className="h-4 w-4 rounded-full relative bg-[#ffbd2e] border border-[#dea123]"></button>
          <button className="h-4 w-4 rounded-full relative bg-[#27c93f] border border-[#1aab29]"></button>
        </div>
        <h1>My Profile.pdf</h1>
        <div className="hover:bg-black/10 p-2 rounded-lg">
          <Download className="stroke-zinc-600 w-5 h-5" />
        </div>
      </nav>

      <div className="flex gap-3 items-center mb-3">
        <img
          src="/profile.png"
          className="aspect-square rounded-full w-30 h-30"
          alt=""
        />
        <div className="flex flex-col flex-wrap">
          <h1 className="font-semibold text-zinc-800 text-2xl wrap-break-word">
            {userData.fullname}
          </h1>
          <p className="text-zinc-400 text-sm mb-5">{userData.username}</p>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <MapPin strokeWidth={2.2} className="w-3 h-3 stroke-zinc-600" />
              <p className="text-zinc-600 text-xs">
                {userData.city}, {userData.country}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Briefcase
                strokeWidth={2.2}
                className="w-3 h-3 stroke-zinc-600"
              />
              <p className="text-zinc-600 text-xs">{userData.job}</p>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="border rounded-full border-gray-300 w-full mx-auto"></div>

      <h1 className="text-xl font-semibold my-3">About</h1>
      <div className="w-full rounded-md">
        <p className="text-zinc-700">{userData.about || "Halo User 👋🏻"}</p>
      </div>

      <h1 className="text-xl text-center font-semibold my-3">Social Media</h1>
      <div className="flex gap-2 items-center justify-center">
        <a
          href={`https://www.instagram.com/${userData.instagram}/`}
          className="hover:scale-120 transition-all hover:rotate-z-10"
        >
          <img
            src="/instagram.png"
            alt=""
            className="h-10 w-10 drop-shadow-2xl"
          />
        </a>
        <a
          href={userData.facebook}
          className="hover:scale-120 transition-all hover:rotate-z-10"
        >
          <img
            src="/facebook.png"
            alt=""
            className="h-10 w-10 drop-shadow-2xl"
          />
        </a>
        <a
          href={`https://x.com/${userData.twitter}`}
          className="hover:scale-120 transition-all hover:rotate-z-10"
        >
          <img
            src="/twitter.png"
            alt=""
            className="h-10 w-10 drop-shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Profile;
