import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Download, MapPin } from "lucide-react";
import { apiRequest } from "../Utils/api";
import gsap from "gsap";

const Profile = ({ isOpen, onClose }) => {
  const ProfileRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Fetch user data
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
        setUserData(res.data);
        console.log("User data:", res.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ✅ Animation logic (same pattern as Finder/Settings)
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      gsap.from(ProfileRef.current, {
        scale: 0,
        opacity: 0,
        ease: "expo.out",
        duration: 0.5,
      });
    } else if (shouldRender) {
      gsap.to(ProfileRef.current, {
        scale: 0,
        opacity: 0,
        ease: "expo.inOut",
        duration: 0.5,
        onComplete: () => setShouldRender(false),
      });
    }
  }, [isOpen, shouldRender]);

  // ✅ Don't render if not open
  if (!shouldRender) return null;

  return (
    <div
      ref={ProfileRef}
      className="w-md bg-white pt-[7vh] abs-center rounded-xl shadow-2xl p-5"
    >
      <nav className="w-full h-[5vh] absolute left-0 top-0 rounded-t-xl flex items-center justify-between px-5 py-7 border-b border-gray-300">
        <div className="flex gap-1.5">
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
        </div>
        <h1>My Profile.pdf</h1>
        <div className="hover:bg-black/10 p-2 rounded-lg cursor-pointer">
          <Download className="stroke-zinc-600 w-5 h-5" />
        </div>
      </nav>

      {isLoading ? (
        <div className="flex items-center justify-center h-40">
          <p className="text-zinc-600">Loading profile...</p>
        </div>
      ) : (
        <>
          <div className="flex gap-3 items-center mb-3">
            <img
              src="/profile.png"
              className="aspect-square rounded-full w-30 h-30"
              alt=""
            />
            <div className="flex flex-col flex-wrap">
              <h1 className="font-semibold text-zinc-800 text-2xl wrap-break-word">
                {userData.fullname || "User"}
              </h1>
              <p className="text-zinc-400 text-sm mb-5">
                {userData.username || "@username"}
              </p>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <MapPin
                    strokeWidth={2.2}
                    className="w-3 h-3 stroke-zinc-600"
                  />
                  <p className="text-zinc-600 text-xs">
                    {userData.city || "City"}, {userData.country || "Country"}
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <Briefcase
                    strokeWidth={2.2}
                    className="w-3 h-3 stroke-zinc-600"
                  />
                  <p className="text-zinc-600 text-xs">
                    {userData.job || "Job"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="border rounded-full border-gray-300 w-full mx-auto"></div>

          <h1 className="text-xl font-semibold mt-3 mb-1">About</h1>
          <div className="w-full rounded-md mb-10">
            <p className="text-zinc-700 text-sm">
              {userData.about || "Halo User 👋🏻"}
            </p>
          </div>

          <h1 className="text-xl text-center font-semibold my-3">
            Social Media
          </h1>
          <div className="flex gap-2 items-center justify-center">
            <a
              href={
                userData.instagram
                  ? `https://www.instagram.com/${userData.instagram}/`
                  : "#"
              }
              className="hover:scale-120 transition-all hover:rotate-z-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="h-10 w-10 drop-shadow-2xl"
              />
            </a>
            <a
              href={userData.facebook || "#"}
              className="hover:scale-120 transition-all hover:rotate-z-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className="h-10 w-10 drop-shadow-2xl"
              />
            </a>
            <a
              href={
                userData.twitter ? `https://x.com/${userData.twitter}` : "#"
              }
              className="hover:scale-120 transition-all hover:rotate-z-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twitter.png"
                alt="Twitter"
                className="h-10 w-10 drop-shadow-2xl"
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
