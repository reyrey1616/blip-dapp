import { useState } from "react";
import Navbar from "./components/Navbar";
import Mining from "./pages/mine/index";
function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Mining />
    </div>
  );
}

export default App;
