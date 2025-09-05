import Navbar from "./components/Navbar";
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
