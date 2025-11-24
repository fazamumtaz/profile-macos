import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "./api";

const AuthGuard = ({ children }) => {
  const [isCheck, setIsCheck] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      // ambil token dari localstorage
      const token = localStorage.getItem("token");

      // cek token, kalo ada lanjut, ngga keluar
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        await apiRequest("/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        alert("AuthGuard error, says: " + error.message);
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setIsCheck(false);
      }
    };

    // jalanin fungsinya
    checkAuth();
  }, [navigate]);

  return <>{children}</>;
};

export default AuthGuard;
