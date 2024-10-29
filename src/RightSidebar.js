import React from "react";
import Statistics from "./Statistics";
import Activity from "./Activity";

function RightSidebar() {
  return (
    <div className="flex flex-col p-2 lg:p-4 space-y-4 lg:space-y-6 bg-white mt-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
        <div className="relative w-10 h-10">
          <img
            src="/image (27).png"
            alt="Notification Bell"
            className="w-full h-full"
            style={{
              width: "25px",
              height: "26px",
            }}
          />

          <div
            className="absolute bg-red-500 rounded-full"
            style={{
              width: "10px",
              height: "10px",
              top: "0px",
              right: "15px",
              border: "2px solid white",
            }}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <div
            className=" bg-white shadow-md relative flex items-center justify-between"
            style={{
              backgroundColor: "#ebf5ff",
              borderRadius: "16px",
              gap: "0px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                top: "604px",
                left: "303px",
                gap: "0px",
                borderRadius: "12px",
                // opacity: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./image (28).png"
                alt="pic"
                className="rounded-xl object-cover"
                style={{
                  width: "40px",
                  height: "40px",
                  top: "722px",
                  left: "316px",
                  gap: "0px",
                }}
              />
            </div>

            <div>
              <h4
                className="text-base font-semibold"
                style={{
                  width: "180px",
                  height: "16px",
                  gap: "0px",

                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "16.39px",
                  textAlign: "left",
                }}
              >
                Burno Fernandes
              </h4>
              <p
                className="text-xs text-gray-500"
                style={{
                  width: "125px",
                  height: "16px",
                  gap: "0px",

                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "16.39px",
                  textAlign: "left",
                  color: "#369FFF",
                }}
              >
                Basic Plan
              </p>
            </div>
            <div className="text-gray-500 text-lg mr-3">
              <img
                src="./image (29).png"
                alt="i4"
                style={{
                  width: "14px",
                  height: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Statistics />
      <Activity />
    </div>
  );
}

export default RightSidebar;
