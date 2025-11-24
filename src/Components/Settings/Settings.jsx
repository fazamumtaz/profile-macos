import React, { useEffect, useRef, useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import gsap from "gsap";
import { apiRequest } from "../../Utils/api";

const Settings = ({ isOpen, onClose, onX }) => {
  const SettingsRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await apiRequest("/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (error) {
        console.log("Gagal fetch data user: ", error.message);
      }
    };
    fetchUserData();
  }, []);

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
      <LeftSide onClose={onClose} user={userData} />
      <RightSide user={userData} onClose={onClose} />
    </div>
  );
};

export default Settings;
