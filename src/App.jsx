import { useState } from "react";
import Finder from "./Components/Finder"; // Import the Finder component

const App = () => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  return (
    <main className="h-screen w-full bg-black/10">
      <nav className="absolute flex left-1/2 -translate-x-1/2 h-20 p-1.5 backdrop-blur-md-blur-lg rounded-2xl bg-white/25 bottom-5">
        <ul className="w-full h-full rounded-xl flex gap-1">
          <li className="hover:bg-white/50 rounded-xl transition-all cursor-pointer">
            <img src="/settings.png" className="w-full h-full" alt="" />
          </li>
          <li
            onClick={() => setIsFinderOpen(!isFinderOpen)}
            className="hover:bg-white/50 rounded-xl transition-all cursor-pointer"
          >
            <img src="/finder.png" className="w-full h-full" alt="" />
          </li>
        </ul>
      </nav>
      <nav className="fixed w-full h-8 bg-white/40 backdrop-blur-xs flex items-center">
        <img src="/github.png" alt="" className="h-[90%] mix-blend-multiply" />
      </nav>

      <Finder isOpen={isFinderOpen} onClose={() => setIsFinderOpen(false)} />
    </main>
  );
};

export default App;
