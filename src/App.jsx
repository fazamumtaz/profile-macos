import { useEffect, useState } from "react";
import Finder from "./Components/Finder"; // Import the Finder component
import Navbar from "./Components/Navbar";
import Taskbar from "./Components/Taskbar";
import Settings from "./Components/Settings/Settings";
import AuthGuard from "./Utils/AuthGuard.jsx";
import { apiRequest } from "./Utils/api.js";

import Profile from "./Components/Profile.jsx";

const App = () => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // fetch data
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
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthGuard>
      <main id="main" className="h-screen w-full bg-black/10">
        <Navbar />
        <Taskbar
          setFinder={setIsFinderOpen}
          isFinder={isFinderOpen}
          setSettings={setIsSettingsOpen}
          isSettings={isSettingsOpen}
        />
        <Finder isOpen={isFinderOpen} onClose={() => setIsFinderOpen(false)} />
        <Settings
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          onX={setIsSettingsOpen}
        />

        <Profile user={userData} />
      </main>
    </AuthGuard>
  );
};

export default App;
