import { useEffect, useState } from "react";
import Finder from "./Components/Finder"; // Import the Finder component
import Navbar from "./Components/Navbar";
import Taskbar from "./Components/Taskbar";
import Settings from "./Components/Settings/Settings";
import AuthGuard from "./Utils/AuthGuard.jsx";

import Profile from "./Components/Profile.jsx";

const App = () => {
  const [isFilesOpen, setIsFilesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <AuthGuard>
      <main id="main" className="h-screen w-full bg-black/10">
        <Navbar />
        <Taskbar
          setFiles={setIsFilesOpen}
          isFiles={isFilesOpen}
          setSettings={setIsSettingsOpen}
          isSettings={isSettingsOpen}
        />
        <Finder isOpen={isFilesOpen} onClose={() => setIsFilesOpen(false)} />
        <Settings
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          onX={setIsSettingsOpen}
        />
      </main>
    </AuthGuard>
  );
};

export default App;
