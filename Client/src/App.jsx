import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-ubuntu">
      <Outlet />
    </div>
  );
}

export default App;