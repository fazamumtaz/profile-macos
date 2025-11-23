import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "./api";

const UserGuard = ({ children }) => {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      // ambil token
      const token = localStorage.getItem("token");

      // cek token, kalo ada, gaboleh ke page login/signup
      if (!token) {
        setIsCheck(false);
        return;
      }

      // cek
      try {
        await apiRequest("/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        navigate("/");
      } catch (error) {
        alert("UserGuard says: " + error.message);
        localStorage.removeItem("token");
        setIsCheck(false);
      }
    };

    checkUser();
  }, [navigate]);

  if (isCheck) {
    return <div>loading</div>;
  }

  return <>{children}</>;
};

export default UserGuard;
