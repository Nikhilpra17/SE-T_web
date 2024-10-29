import React from "react";
import MyCourse from "./MyCourse";
import Planning from "./Planning";

function MainContent() {
  return (
    <div className="p-4 lg:p-8 space-y-4 lg:space-y-6 mt-2 ">
      <div
        style={{
          width: "263px",
          height: "25px",
          top: "50px",
          left: "288px",
          gap: "0px",
          opacity: "1",
          color: "#369FFF",
        }}
      >
        <h2
          className="text-xl lg:text-2xl font-bold"
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "24.59px",
            letterSpacing: "0.05em",
            textAlign: "left",
          }}
        >
          Hello <b>BRUNO</b>, welcome back!
        </h2>
      </div>

      <MyCourse />

      <Planning />
    </div>
  );
}

export default MainContent;
