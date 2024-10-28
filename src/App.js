import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar (15% on desktop) */}
      <div className="w-full lg:w-[16%]  relative">
        <Sidebar />
        {/* Vertical line separator */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[2px] bg-[#F0F0F0]" />
      </div>

      {/* Main Content (50% on desktop) */}
      <div className="w-full lg:w-[54%] bg-white relative">
        <MainContent />
        {/* Vertical line separator */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[2px] bg-[#F0F0F0]" />
      </div>

      {/* Right Sidebar (35% on desktop) */}
      <div className="w-full lg:w-[30%] bg-gray-50">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
