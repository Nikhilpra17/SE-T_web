import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar (15% on desktop) */}
      <div className="w-full lg:w-1/6 bg-gray-100">
        <Sidebar />
      </div>

      {/* Main Content (55% on desktop) */}
      <div className="w-full lg:w-7/12 bg-white">
        <MainContent />
      </div>

      {/* Right Sidebar (30% on desktop) */}
      <div className="w-full lg:w-1/4 bg-gray-50">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
