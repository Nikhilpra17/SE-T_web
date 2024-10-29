import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      <div className="w-full lg:w-[16%]  relative">
        <Sidebar />

        <div className="hidden lg:block absolute top-0 right-0 h-full w-[2px] bg-[#F0F0F0]" />
      </div>

      <div className="w-full lg:w-[54%] bg-white relative">
        <MainContent />

        <div className="hidden lg:block absolute top-0 right-0 h-full w-[2px] bg-[#F0F0F0]" />
      </div>

      <div className="w-full lg:w-[30%] bg-white">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
