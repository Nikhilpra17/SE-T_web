import React from "react";
import MyCourse from "./MyCourse";
import Planning from "./Planning";

function MainContent() {
  return (
    <div className="p-4 lg:p-8 space-y-4 lg:space-y-6">
      {/* Welcome Message */}
      <h2 className="text-xl lg:text-2xl font-bold">
        Hello <b>BRUNO</b>, welcome back!
      </h2>

      {/* My Course Component */}
      <MyCourse />

      {/* Planning Component */}
      <Planning />
    </div>
  );
}

export default MainContent;
