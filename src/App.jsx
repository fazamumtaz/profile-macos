import { useState } from "react";
import Finder from "./Components/Finder";
import Navbar from "./Components/Navbar";
import Taskbar from "./Components/Taskbar";
import Settings from "./Components/Settings/Settings";
import AuthGuard from "./Utils/AuthGuard.jsx";
import Profile from "./Components/Profile.jsx";

const App = () => {
  const [isFilesOpen, setIsFilesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // ✅ Add state for Profile visibility
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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

        {/* ✅ Pass state control to Finder */}
        <Finder
          isOpen={isFilesOpen}
          onClose={() => setIsFilesOpen(false)}
          onOpenProfile={() => setIsProfileOpen(true)} // Pass handler
        />

        <Settings
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          onX={setIsSettingsOpen}
        />

        {/* ✅ Profile controlled by state */}
        <Profile
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        />
      </main>
    </AuthGuard>
  );
};

export default App;
